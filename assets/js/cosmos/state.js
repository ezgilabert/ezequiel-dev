/**
 * state.js
 * Shared animation state for the cosmos scene.
 *
 * Transition flags (isTransitioning, transitionType, rewindComplete, and
 * themeSwitchedToLight) live in transition.js; this module stores animation data.
 */

window.CosmosState = {
    // Viewport dimensions and pointer position
    width: 0,
    height: 0,
    sceneAnchorX: 0.82,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    pointerParallaxEnabled: true,
    panX: 0,
    panY: 0,
    targetPanX: 0,
    targetPanY: 0,
    sceneZoom: 1,

    // General animation state
    pulseAnim: 0,
    screenShake: 0,
    shakeX: 0,
    shakeY: 0,
    flashIntensity: 0,

    // Supernova and rewind progress
    rewindFactor: 0,
    supernovaProgress: 0,
    supernovaGlow: 0,
    dwarfProgress: 0,

    // Entity collections
    shockwaves: [],
    explosionSparks: []
};