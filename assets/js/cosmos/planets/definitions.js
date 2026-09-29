/**
 * planets/definitions.js
 * Initial state for the four celestial bodies.
 * Data and getters only; drawing and physics live in separate modules.
 */

const planetDefs = (() => {
    // Earth.
    const planet1 = {
        orbitRadiusX: 320,
        orbitRadiusY: 120,
        angle: Math.random() * Math.PI * 2,
        speed: 0.006,
        radius: 16,
        isDestroyed: false,
        fragments: []
    };

    // Moon.
    const moon = {
        orbitRadiusX: 36,
        orbitRadiusY: 15,
        angle: Math.random() * Math.PI * 2,
        speed: 0.024,
        radius: 4.5,
        fragments: []
    };

    // Saturno
    const planet2 = {
        orbitRadiusX: 580,
        orbitRadiusY: 190,
        angle: Math.random() * Math.PI * 2 + 2.0,
        speed: 0.0028,
        radius: 20,
        ringRadiusX: 36,
        ringRadiusY: 10
    };

    // Mars survives the supernova because it is farther away.
    const planet3 = {
        orbitRadiusX: 900,
        orbitRadiusY: 310,
        angle: Math.random() * Math.PI * 2 + 4.0,
        speed: 0.0016,
        radius: 14
    };

    return {
        get planet1() { return planet1; },
        get moon()    { return moon; },
        get planet2() { return planet2; },
        get planet3() { return planet3; }
    };
})();

window.planetDefs = planetDefs;