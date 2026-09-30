const cosmosView = (() => {
    const toggleButton = document.getElementById('cosmos-view-toggle');
    const exitButton = document.getElementById('cosmos-view-exit');
    const card = document.querySelector('main.glass-card');
    const profileTrigger = document.getElementById('profile-trigger');
    const state = window.CosmosState;
    let isPanning = false;
    let lastPointerX = 0;
    let lastPointerY = 0;

    function startPan(event) {
        if (!document.body.classList.contains('cosmos-viewing') || event.button !== 0) return;
        if (event.target.closest('button, a, input, textarea, [role="button"]')) return;
        isPanning = true;
        lastPointerX = event.clientX;
        lastPointerY = event.clientY;
        document.body.classList.add('cosmos-panning');
    }

    function pan(event) {
        if (!isPanning) return;
        const maxPanX = state.width * 0.65;
        const maxPanY = state.height * 0.65;
        state.targetPanX = Math.max(-maxPanX, Math.min(maxPanX, state.targetPanX + event.clientX - lastPointerX));
        state.targetPanY = Math.max(-maxPanY, Math.min(maxPanY, state.targetPanY + event.clientY - lastPointerY));
        lastPointerX = event.clientX;
        lastPointerY = event.clientY;
        event.preventDefault();
    }

    function stopPan() {
        isPanning = false;
        document.body.classList.remove('cosmos-panning');
    }

    function setViewing(viewing) {
        document.body.classList.toggle('cosmos-viewing', viewing);
        state.pointerParallaxEnabled = !viewing;
        if (viewing) {
            state.mouseX = 0;
            state.mouseY = 0;
            state.targetMouseX = 0;
            state.targetMouseY = 0;
            state.panX = 0;
            state.panY = 0;
            state.targetPanX = 0;
            state.targetPanY = 0;
        }
        toggleButton.setAttribute('aria-pressed', String(viewing));
        card.inert = viewing;
        card.setAttribute('aria-hidden', String(viewing));
        profileTrigger.inert = viewing;
        profileTrigger.setAttribute('aria-hidden', String(viewing));
        exitButton.hidden = !viewing;
        if (!viewing) {
            stopPan();
            state.targetPanX = 0;
            state.targetPanY = 0;
        }
        (viewing ? exitButton : toggleButton).focus();
    }

    function init() {
        if (!toggleButton || !exitButton || !card || !profileTrigger) return;
        toggleButton.addEventListener('click', () => setViewing(true));
        exitButton.addEventListener('click', () => setViewing(false));
        document.addEventListener('pointerdown', startPan);
        document.addEventListener('pointermove', pan, { passive: false });
        document.addEventListener('pointerup', stopPan);
        document.addEventListener('pointercancel', stopPan);
        window.addEventListener('blur', stopPan);
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && toggleButton.getAttribute('aria-pressed') === 'true') setViewing(false);
        });
    }

    return { init };
})();

window.cosmosView = cosmosView;