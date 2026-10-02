const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const source = readFileSync(path.join(__dirname, '../assets/js/app.js'), 'utf8');

function createAppHarness(readyState, language = 'es') {
    let now = 0;
    const timers = [];
    const loadingText = { textContent: '' };
    const loadingScreen = {
        attributes: {},
        classList: { add(className) { loadingScreen.hiddenClass = className; } },
        setAttribute(name, value) { loadingScreen.attributes[name] = value; }
    };
    const window = {
        Storage: { get: (_key, fallback) => language || fallback },
        TRANSLATIONS: {
            es: { loading_text: 'CARGANDO...' },
            en: { loading_text: 'LOADING...' }
        },
        setTimeout(callback, delay) { timers.push({ callback, delay }); },
        setInterval(callback, delay) {
            window.loadingMessageInterval = { callback, delay };
            return window.loadingMessageInterval;
        },
        clearInterval(interval) { window.clearedLoadingMessageInterval = interval; },
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
        getElementById(id) {
            if (id === 'loading-screen') return loadingScreen;
            if (id === 'loading-text') return loadingText;
            return { textContent: '' };
        }
    };

    vm.runInNewContext(source, {
        document,
        performance: { now: () => now },
        window
    });

    return {
        document,
        loadingScreen,
        loadingText,
        window,
        runNextTimer() {
            const timer = timers.shift();
            assert.ok(timer, 'Expected a scheduled loading check');
            now += timer.delay;
            timer.callback();
        },
        get now() { return now; }
    };
}

test('cycles loading text independently of the selected page language', () => {
    for (const language of ['es', 'en']) {
        const harness = createAppHarness('complete', language);

        assert.equal(harness.loadingText.textContent, 'LOADING...');
        assert.equal(harness.window.loadingMessageInterval.delay, 1500);

        harness.window.loadingMessageInterval.callback();
        assert.equal(harness.loadingText.textContent, 'CARGANDO...');

        harness.window.loadingMessageInterval.callback();
        assert.equal(harness.loadingText.textContent, 'LOADING...');

        harness.runNextTimer();
        assert.equal(harness.window.clearedLoadingMessageInterval, harness.window.loadingMessageInterval);
    }
});

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
