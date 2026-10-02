const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const source = readFileSync(path.join(__dirname, '../assets/js/app.js'), 'utf8');

function createAppHarness(readyState) {
    let now = 0;
    const timers = [];
    const loadingScreen = {
        attributes: {},
        classList: { add(className) { loadingScreen.hiddenClass = className; } },
        setAttribute(name, value) { loadingScreen.attributes[name] = value; }
    };
    const window = {
        Storage: { get: (_key, fallback) => fallback },
        TRANSLATIONS: { es: { loading_text: 'CARGANDO...' } },
        setTimeout(callback, delay) { timers.push({ callback, delay }); },
        renderSkills: { init() {} },
        renderExperience: { init() {} },
        renderEducation: { init() {} },
        tabs: { init() {} },
        profileCards: { init() {} },
        contact: { init() {} },
        mobileSheet: { init() {} },
        i18n: { init() {}, apply() {} },
        theme: { init() {} },
        cosmosView: { init() {} },
        cosmos: { init() {} }
    };
    const document = {
        readyState,
        documentElement: { lang: 'es' },
        getElementById: id => id === 'loading-screen' ? loadingScreen : { textContent: '' }
    };

    vm.runInNewContext(source, {
        document,
        performance: { now: () => now },
        window
    });

    return {
        document,
        loadingScreen,
        runNextTimer() {
            const timer = timers.shift();
            assert.ok(timer, 'Expected a scheduled loading check');
            now += timer.delay;
            timer.callback();
        },
        get now() { return now; }
    };
}

test('keeps the loading screen visible for at least three seconds', () => {
    const harness = createAppHarness('complete');

    assert.equal(harness.loadingScreen.hiddenClass, undefined);
    harness.runNextTimer();

    assert.equal(harness.now, 3000);
    assert.equal(harness.loadingScreen.hiddenClass, 'is-hidden');
    assert.equal(harness.loadingScreen.attributes['aria-hidden'], 'true');
});

test('continues checking until the page is complete after the minimum duration', () => {
    const harness = createAppHarness('loading');

    for (let elapsed = 0; elapsed < 3000; elapsed += 100) {
        harness.runNextTimer();
    }

    assert.equal(harness.now, 3000);
    assert.equal(harness.loadingScreen.hiddenClass, undefined);

    harness.runNextTimer();
    assert.equal(harness.loadingScreen.hiddenClass, undefined);

    harness.document.readyState = 'complete';
    harness.runNextTimer();

    assert.equal(harness.now, 3200);
    assert.equal(harness.loadingScreen.hiddenClass, 'is-hidden');
});
