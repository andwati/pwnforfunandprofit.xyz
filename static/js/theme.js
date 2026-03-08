document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check local storage for theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        if (currentTheme === 'light') {
            htmlElement.classList.remove('dark');
        }
    } else {
        // Fallback to system preference
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (!prefersDarkScheme.matches) {
            htmlElement.classList.remove('dark');
        }
    }

    // Toggle theme on click
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            let theme = 'light';
            if (htmlElement.classList.contains('dark')) {
                theme = 'dark';
            }
            localStorage.setItem('theme', theme);
        });
    }

    // TypeIt effect for Hero Title (if present)
    // We achieve a simple typing effect native JS so we don't need a heavy library, but since features requested it,
    // we can implement a simulated TypeIt or load the library. For performance, we do a native CSS/JS combo.
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.innerText;
        heroTitle.innerText = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50 + Math.random() * 50); // Organic typing speed
            }
        };
        setTimeout(typeWriter, 500); // Intro delay
    }
});
