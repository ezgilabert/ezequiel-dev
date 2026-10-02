(function initializeSavedTheme() {
    'use strict';

    try {
        if (JSON.parse(localStorage.getItem('theme')) === 'light') {
            document.documentElement.classList.remove('dark');
        }
    } catch {
        // Keep the default dark theme when storage is unavailable or invalid.
    }
})();
