/**
 * events.js
 * Global pub/sub event bus for decoupled modules.
 *
 * Usage:
 *   Events.on('card:impact', () => { ... });
 *   Events.emit('card:impact', { foo: 'bar' });
 *   const off = Events.on('x', fn);
 *   off(); // Unsubscribe.
 *
 * Naming convention: 'domain:action' (e.g. 'theme:commit', 'wave:hit').
 */

const events = (() => {
    /** @type {Record<string, Function[]>} */
    let listeners = {};

    /**
     * Subscribe a handler to an event.
     * @param {string} event
     * @param {(payload?: any) => void} handler
     * @returns {() => void} An unsubscribe function.
     */
    function on(event, handler) {
        if (!listeners[event]) listeners[event] = [];
        listeners[event].push(handler);
        return () => off(event, handler);
    }

    /**
     * Unsubscribe a specific handler.
     */
    function off(event, handler) {
        if (!listeners[event]) return;
        listeners[event] = listeners[event].filter(fn => fn !== handler);
    }

    /**
     * Emit an event. A handler error does not prevent other handlers from running.
     */
    function emit(event, payload) {
        if (!listeners[event]) return;
        // Iterate over a snapshot so unsubscriptions during emit do not affect this loop.
        const handlers = listeners[event].slice();
        for (const fn of handlers) {
            try {
                fn(payload);
            } catch (err) {
                console.error(`[Events] Handler error in "${event}":`, err);
            }
        }
    }

    /**
     * Clear handlers. With no argument, clear all handlers.
     */
    function clear(event) {
        if (event) delete listeners[event];
        else listeners = {};
    }

    /**
     * Return the number of handlers registered for each event.
     */
    function debug() {
        const out = {};
        for (const [k, v] of Object.entries(listeners)) out[k] = v.length;
        return out;
    }

    return { on, off, emit, clear, debug };
})();

window.Events = events;