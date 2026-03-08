document.addEventListener('DOMContentLoaded', () => {
    if (typeof elasticlunr === 'undefined') return;

    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchToggle = document.querySelector('.search-toggle');
    const searchClose = document.getElementById('search-close');

    let searchIndex = null;

    // Load search index
    fetch('/search_index.en.js')
        .then(response => response.json())
        .then(data => {
            searchIndex = elasticlunr.Index.load(data);
        })
        .catch(err => console.error('Failed to load search index:', err));

    // Open search
    const openSearch = () => {
        if (!searchOverlay) return;
        searchOverlay.classList.add('is-active');
        setTimeout(() => searchInput?.focus(), 100);
    };

    // Close search
    const closeSearch = () => {
        if (!searchOverlay) return;
        searchOverlay.classList.remove('is-active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    };

    // Perform search
    const performSearch = (query) => {
        if (!searchIndex || !query) {
            searchResults.innerHTML = '';
            return;
        }

        const results = searchIndex.search(query, {
            fields: {
                title: { boost: 2 },
                body: { boost: 1 }
            },
            expand: true
        });

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
            return;
        }

        const html = results.slice(0, 10).map(result => {
            const doc = searchIndex.documentStore.getDoc(result.ref);
            const snippet = doc.body.substring(0, 150);
            return `
                <a href="${doc.url}" class="search-result-item">
                    <h3 class="search-result-title">${doc.title}</h3>
                    <p class="search-result-snippet">${snippet}...</p>
                </a>
            `;
        }).join('');

        searchResults.innerHTML = html;
    };

    // Event listeners
    if (searchToggle) {
        searchToggle.addEventListener('click', openSearch);
    }

    if (searchClose) {
        searchClose.addEventListener('click', closeSearch);
    }

    if (searchOverlay) {
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) closeSearch();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value.trim());
        });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Escape to close
        if (e.key === 'Escape' && searchOverlay?.classList.contains('is-active')) {
            closeSearch();
        }
        // Ctrl/Cmd + K to open
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
    });
});
