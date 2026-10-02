/**
 * app.js
 * Initialize application modules in dependency order.
 */

(function bootstrap() {
    'use strict';

    const loadingScreen = document.getElementById('loading-screen');
    const loadingText = document.getElementById('loading-text');
    const loadingStartedAt = performance.now();
    const savedLanguage = window.Storage.get('lang', document.documentElement.lang);
    const initialLanguage = window.TRANSLATIONS[savedLanguage] ? savedLanguage : 'es';

    if (loadingText) loadingText.textContent = window.TRANSLATIONS[initialLanguage].loading_text;

    function hideLoadingScreen() {
        const remainingTime = Math.max(0, 500 - (performance.now() - loadingStartedAt));
        window.setTimeout(() => {
            if (!loadingScreen) return;
            loadingScreen.classList.add('is-hidden');
            loadingScreen.setAttribute('aria-hidden', 'true');
        }, remainingTime);
    }

    if (document.readyState === 'complete') {
        hideLoadingScreen();
    } else {
        window.addEventListener('load', hideLoadingScreen, { once: true });
    }

    window.renderSkills.init();
    window.renderExperience.init();
    window.renderEducation.init();

    window.tabs.init();
    window.profileCards.init();
    window.contact.init();
    window.mobileSheet.init();

    window.i18n.init();
    window.i18n.apply(initialLanguage);

    window.theme.init();
    window.cosmosView.init();

    window.cosmos.init();
})();