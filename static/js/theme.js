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
});
