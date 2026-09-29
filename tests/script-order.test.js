const assert = require('node:assert/strict');
const { existsSync, readFileSync } = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const projectRoot = path.resolve(__dirname, '..');
const html = readFileSync(path.join(projectRoot, 'index.html'), 'utf8');
const scripts = Array.from(
    html.matchAll(/<script\b[^>]*\bsrc="(assets\/js\/[^\"]+)"[^>]*><\/script>/g),
    match => match[1]
);

test('index loads local scripts in classic mode and initializes the app last', () => {
    assert.ok(scripts.length > 0);
    assert.doesNotMatch(html, /<script\b[^>]*type="module"/);
    scripts.forEach(source => {
        assert.ok(existsSync(path.join(projectRoot, source)), `Missing script: ${source}`);
    });
    assert.equal(scripts.at(-1), 'assets/js/app.js');
});

test('index preserves script dependency order', () => {
    const dependencies = [
        ['assets/js/core/dom.js', 'assets/js/ui/i18n.js'],
        ['assets/js/data/translations.js', 'assets/js/ui/i18n.js'],
        ['assets/js/data/experience.js', 'assets/js/ui/render-experience.js'],
        ['assets/js/data/education.js', 'assets/js/ui/render-education.js'],
        ['assets/js/cosmos/transition.js', 'assets/js/cosmos/engine.js'],
        ['assets/js/cosmos/state.js', 'assets/js/cosmos/engine.js'],
        ['assets/js/cosmos/engine.js', 'assets/js/ui/theme.js']
    ];

    for (const [dependency, consumer] of dependencies) {
        assert.ok(scripts.indexOf(dependency) < scripts.indexOf(consumer), `${dependency} must load before ${consumer}`);
    }
});

test('index loads the generated local Tailwind stylesheet', () => {
    assert.match(html, /href="assets\/css\/tailwind\.generated\.css"/);
    assert.ok(existsSync(path.join(projectRoot, 'assets/css/tailwind.generated.css')));
    assert.doesNotMatch(html, /cdn\.tailwindcss\.com/);
});

test('index uses local fonts and icons without runtime CDNs', () => {
    const localAssets = [
        'assets/css/fonts.css',
        'assets/css/vendor/phosphor-bold.css',
        'assets/css/vendor/phosphor-fill.css',
        'assets/fonts/inter-latin-400-normal.woff2',
        'assets/fonts/inter-latin-700-normal.woff2',
        'assets/fonts/jetbrains-mono-latin-400-normal.woff2',
        'assets/css/vendor/Phosphor-Bold.woff2',
        'assets/css/vendor/Phosphor-Fill.woff2'
    ];

    localAssets.forEach(asset => {
        assert.ok(existsSync(path.join(projectRoot, asset)), `Missing generated asset: ${asset}`);
    });
    assert.doesNotMatch(html, /fonts\.googleapis\.com|fonts\.gstatic\.com|unpkg\.com\/\@phosphor-icons/);
});