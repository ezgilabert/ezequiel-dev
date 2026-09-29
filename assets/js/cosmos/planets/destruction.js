/**
 * planets/destruction.js
 * Manage the destruction and reconstruction lifecycle of Earth and the Moon.
 * Depends on: definitions.js, fragments.js, state.js, and transition.js.
 */

const planetDestruction = (() => {
    const D = window.planetDefs;
    const S = window.CosmosState;
    const FSM = window.transition;

    function destroyEarth(impactX, impactY, moonX, moonY) {
        const p1 = D.planet1;
        const m = D.moon;

        p1.isDestroyed = true;

        const { planetFrags, moonFrags } = window.fragments.createPlanetFragments(
            impactX, impactY, p1.radius,
            moonX, moonY, m.radius
        );

        p1.fragments = planetFrags;
        m.fragments = moonFrags;
    }

    function resetEarth() {
        D.planet1.isDestroyed = false;
        D.planet1.fragments = [];
        D.moon.fragments = [];
    }

    /**
    * Draw Earth and Moon fragments.
    * During rewind, advance rewindFactor and mark the bodies ready when complete.
     */
    function drawDestroyedFragments(planetX, planetY, moonX, moonY) {
        if (FSM.is(FSM.STATES.REWIND)) {
            S.rewindFactor -= 0.022;
            if (S.rewindFactor <= 0) {
                S.rewindFactor = 0;
                // planets/index.js performs the actual reset.
                // when it detects this state; this module only sets the flag.
                S._rewindFinished = true;
                return;
            }
        }
        window.fragments.drawFragments(D.planet1.fragments, planetX, planetY, 0.12, 0.3);
        window.fragments.drawFragments(D.moon.fragments, moonX, moonY, 0.12, 0.4);
    }

    function consumeRewindFinished() {
        if (S._rewindFinished) {
            S._rewindFinished = false;
            return true;
        }
        return false;
    }

    return { destroyEarth, resetEarth, drawDestroyedFragments, consumeRewindFinished };
})();

window.planetDestruction = planetDestruction;