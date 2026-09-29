/**
 * theme.js
 * Manage the theme toggle and coordinate with the cosmos animation.
 *
 * Defaults to dark mode unless the user has saved a preference.
 * Respects a manually selected theme on later visits.
 */

const theme = (() => {
    const { $, on } = window.DOM;
    const storage = window.Storage;
    const Events = window.Events;
    let locked = false;

    const STORAGE_KEY = 'theme';
    const DEFAULT_THEME = 'dark';

    function lock(value) {
        locked = !!value;
        const btn = $('#theme-toggle-btn');
        if (btn) btn.disabled = locked;
    }

    function setIcon(goingToDark) {
        const icon = $('#theme-icon');
        if (!icon) return;
        icon.classList.toggle('ph-sun', goingToDark);
        icon.classList.toggle('ph-moon', !goingToDark);
    }

    function igniteCard() {
        const card = document.querySelector('main.glass-card');
        if (!card) return;

        card.classList.remove('wave-ignite');
        void card.offsetWidth;
        card.classList.add('wave-ignite');
        setTimeout(() => card.classList.remove('wave-ignite'), 1400);
    }

    function toggle() {
        if (locked) return;
        const html = document.documentElement;
        const goingToLight = html.classList.contains('dark');

        lock(true);

        if (goingToLight) {
            window.cosmos.triggerSupernova();
            setTimeout(igniteCard, 320);
        } else {
            window.cosmos.triggerRewind();
            setTimeout(() => {
                html.classList.add('dark');
                setIcon(true);
                storage.set(STORAGE_KEY, 'dark');
            }, 220);
        }
    }

    function onShockwaveReachesCard() {
        igniteCard();
    }

    function commitLightTheme() {
        const html = document.documentElement;
        html.classList.remove('dark');
        setIcon(false);
        storage.set(STORAGE_KEY, 'light');
    }

    function onTransitionEnd() {
        lock(false);
    }

    function init() {
        const stored = storage.get(STORAGE_KEY, DEFAULT_THEME);
        const html = document.documentElement;

        if (stored === 'dark') {
            html.classList.add('dark');
            setIcon(true);
        } else {
            html.classList.remove('dark');
            setIcon(false);
        }

        Events.on('card:impact',        onShockwaveReachesCard);
        Events.on('theme:commit-light', commitLightTheme);
        Events.on('transition:end',     onTransitionEnd);
        on($('#theme-toggle-btn'), 'click', toggle);
    }

    return { init, toggle, igniteCard, onShockwaveReachesCard, commitLightTheme, onTransitionEnd };
})();

window.theme = theme;