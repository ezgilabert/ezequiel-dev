/**
 * planets/index.js
 * Coordinate back/front drawing layers and expose the public API.
 */

const planets = (() => {
    const D = window.planetDefs;
    const FSM = window.transition;
    const Physics = window.planetPhysics;
    const Destruction = window.planetDestruction;

    function drawBack(starX, starY, isDark) {
        const pos = Physics.computePositions(starX, starY);

        if (pos.isP2Behind) window.drawSaturn.draw(starX, starY, isDark, pos.p2X, pos.p2Y);
        if (pos.isP3Behind) window.drawMars.draw(starX, starY, isDark, pos.p3X, pos.p3Y);

        if (!D.planet1.isDestroyed && pos.isP1Behind) {
            if (pos.isMoonBehind) {
                window.drawMoon.draw(pos.p1X, pos.p1Y, starX, isDark, pos.mX, pos.mY);
                window.drawEarth.draw(starX, starY, isDark, pos.p1X, pos.p1Y);
            } else {
                window.drawEarth.draw(starX, starY, isDark, pos.p1X, pos.p1Y);
                window.drawMoon.draw(pos.p1X, pos.p1Y, starX, isDark, pos.mX, pos.mY);
            }
        }
    }

    function drawFront(starX, starY, isDark) {
        const pos = Physics.computePositions(starX, starY);

        // --- Earth destroyed ---
        if (D.planet1.isDestroyed) {
            Destruction.drawDestroyedFragments(pos.p1X, pos.p1Y, pos.mX, pos.mY);

            // When rewind completes, return the FSM to idle and reset state.
            if (Destruction.consumeRewindFinished()) {
                Destruction.resetEarth();
                window.asteroids.resetAllSatellites();
                FSM.reset(); // dispara 'enter:idle' → 'transition:end'
            }
            return;
        }

        // --- Earth intact ---
        if (!pos.isP1Behind) {
            if (pos.isMoonBehind) {
                window.drawMoon.draw(pos.p1X, pos.p1Y, starX, isDark, pos.mX, pos.mY);
                window.drawEarth.draw(starX, starY, isDark, pos.p1X, pos.p1Y);
            } else {
                window.drawEarth.draw(starX, starY, isDark, pos.p1X, pos.p1Y);
                window.drawMoon.draw(pos.p1X, pos.p1Y, starX, isDark, pos.mX, pos.mY);
            }
        }

        if (!pos.isP2Behind) window.drawSaturn.draw(starX, starY, isDark, pos.p2X, pos.p2Y);
        if (!pos.isP3Behind) window.drawMars.draw(starX, starY, isDark, pos.p3X, pos.p3Y);
    }

    return {
        update: Physics.update,
        drawBack,
        drawFront,
        computePositions: Physics.computePositions,
        destroyEarth: Destruction.destroyEarth,
        resetEarth: Destruction.resetEarth,
        get planet1() { return D.planet1; },
        get moon()    { return D.moon; }
    };
})();

window.planets = planets;