/**
 * shockwaves/index.js
 * Coordinate shock waves and the supernova overlay.
 *
 * Reemplaza al antiguo shockwaves.js.
 * Public API:
 *   - init()
 *   - trigger(impactX, impactY)
 *   - draw(isDark)
 *   - drawSupernovaOverlay(starX, starY)
 */

const shockwaves = (() => {
    function init() { /* nada que inicializar */ }

    function trigger(impactX, impactY) {
        window.shockWaves.trigger(impactX, impactY);
    }

    function draw(isDark) {
        window.shockWaves.draw(isDark);
    }

    function drawSupernovaOverlay(starX, starY) {
        window.supernovaOverlay.draw(starX, starY);
    }

    return { init, trigger, draw, drawSupernovaOverlay };
})();

window.shockwaves = shockwaves;