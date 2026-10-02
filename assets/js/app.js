/**
 * app.js
 * Initialize application modules in dependency order.
 */

(function bootstrap() {
    'use strict';

    const loadingScreen = document.getElementById('loading-screen');
    const loadingText = document.getElementById('loading-text');
    const loadingStartedAt = performance.now();
    const minimumLoadingDuration = 3000;
    const savedLanguage = window.Storage.get('lang', document.documentElement.lang);
    const initialLanguage = window.TRANSLATIONS[savedLanguage] ? savedLanguage : 'es';
    const loadingMessages = ['LOADING...', 'CARGANDO...'];
    let loadingMessageIndex = 0;
    let loadingMessageInterval = null;

    if (loadingText) {
        loadingText.textContent = loadingMessages[loadingMessageIndex];
        loadingMessageInterval = window.setInterval(() => {
            loadingMessageIndex = (loadingMessageIndex + 1) % loadingMessages.length;
            loadingText.textContent = loadingMessages[loadingMessageIndex];
        }, 1500);
    }

    function hideLoadingScreen() {
        if (!loadingScreen) return;
        if (loadingMessageInterval !== null) {
            window.clearInterval(loadingMessageInterval);
            loadingMessageInterval = null;
        }
        loadingScreen.classList.add('is-hidden');
        loadingScreen.setAttribute('aria-hidden', 'true');
    }

    function waitForPageAndHideLoadingScreen() {
        const remainingTime = minimumLoadingDuration - (performance.now() - loadingStartedAt);

        if (document.readyState === 'complete' && remainingTime <= 0) {
            hideLoadingScreen();
            return;
        }

        const nextCheckDelay = document.readyState === 'complete' ? remainingTime : 100;
        window.setTimeout(waitForPageAndHideLoadingScreen, nextCheckDelay);
    }

    waitForPageAndHideLoadingScreen();

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