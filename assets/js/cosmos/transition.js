/**
 * transition.js
 * State machine for theme transitions between idle, explode, and rewind.
 * Emits events through window.Events without depending on consumers.
 *
 * Valid states:
 *   - 'idle'    → no active transition
 *   - 'explode' → supernova in progress (dark → light)
 *   - 'rewind'  → rewind in progress (light → dark)
 *
 * Usage:
 *   transition.goTo('explode');         // Emit enter/exit events.
 *   transition.is('explode');           // Check the active state.
 *   transition.on('enter:explode', fn); // Subscribe to an event.
 *   transition.on('exit:explode', fn);
 *
 * Emitted event names:
 *   - 'transition:change'         → { from, to }
 *   - 'enter:idle' / 'exit:idle'
 *   - 'enter:explode' / 'exit:explode'
 *   - 'enter:rewind' / 'exit:rewind'
 */

const transition = (() => {
    const Events = window.Events;

    const STATES = {
        IDLE:    'idle',
        EXPLODE: 'explode',
        REWIND:  'rewind'
    };

    let current = STATES.IDLE;

    // ============================================================
    // API
    // ============================================================

    function state() {
        return current;
    }

    function is(s) {
        return current === s;
    }

    function isIdle()    { return current === STATES.IDLE; }
    function isExplode() { return current === STATES.EXPLODE; }
    function isRewind()  { return current === STATES.REWIND; }
    function isBusy()    { return current !== STATES.IDLE; }

    /**
    * Change state; do nothing if the requested state is already active.
     * Emits 'exit:X' followed by 'enter:Y'.
     */
    function goTo(next) {
        if (next === current) return false;
        if (!Object.values(STATES).includes(next)) {
            console.warn(`[transition] Invalid state: "${next}"`);
            return false;
        }

        const prev = current;
        Events.emit(`exit:${prev}`, { from: prev, to: next });
        current = next;
        Events.emit('transition:change', { from: prev, to: next });
        Events.emit(`enter:${next}`, { from: prev, to: next });
        return true;
    }

    /**
    * Enter a state only while idle to prevent overlapping transitions.
     */
    function tryStart(target) {
        if (!isIdle()) return false;
        return goTo(target);
    }

    function reset() {
        return goTo(STATES.IDLE);
    }

    /**
     * Subscribe a handler to an FSM event.
    * Return an unsubscribe function.
     */
    function on(event, handler) {
        return Events.on(event, handler);
    }

    // ============================================================
    // Compatibility helpers
    // ============================================================
    // Keep `isTransitioning` and `transitionType` for legacy consumers.
    // Keep legacy properties available as read-only proxies until consumers are migrated.
    function legacyType() {
        return current === STATES.IDLE ? 'none' : current;
    }

    return {
        STATES,
        state,
        is,
        isIdle,
        isExplode,
        isRewind,
        isBusy,
        goTo,
        tryStart,
        reset,
        on,
        legacyType
    };
})();

window.transition = transition;