const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');

const projectRoot = path.resolve(__dirname, '..');

function loadWindowData(relativePath) {
    const context = { window: {} };
    const source = readFileSync(path.join(projectRoot, relativePath), 'utf8');
    vm.runInNewContext(source, context, { filename: relativePath });
    return context.window;
}

function getAtPath(source, keyPath) {
    return keyPath.split('.').reduce((value, key) => value?.[key], source);
}

const translations = loadWindowData('assets/js/data/translations.js').TRANSLATIONS;
const experiences = loadWindowData('assets/js/data/experience.js').EXPERIENCE_DATA;
const education = loadWindowData('assets/js/data/education.js').EDUCATION_DATA;

test('every experience and education list has translations in both languages', () => {
    const listKeys = [
        ...experiences.map(item => item.i18nKey),
        ...education.map(item => item.bulletsKey)
    ];

    for (const language of ['es', 'en']) {
        for (const key of listKeys) {
            const items = getAtPath(translations[language], key);
            assert.ok(Array.isArray(items) && items.length > 0, `Missing ${language} list: ${key}`);
        }
    }
});

test('every experience role has a translation in both languages', () => {
    for (const language of ['es', 'en']) {
        for (const experience of experiences) {
            assert.ok(translations[language][experience.roleKey], `Missing ${language} role: ${experience.roleKey}`);
        }
    }
});

test('i18n renders nested list translations as text content', () => {
    const list = {
        dataset: { i18nList: experiences[0].i18nKey },
        children: [],
        replaceChildren(...children) {
            this.children = children;
        }
    };
    const titleControl = {
        title: '',
        getAttribute: name => name === 'data-i18n-title' ? 'language_toggle_title' : null
    };
    const ariaControl = {
        attributes: {},
        getAttribute: name => name === 'data-i18n-aria-label' ? 'profile_open' : null,
        setAttribute(name, value) {
            this.attributes[name] = value;
        }
    };
    const roleLabel = {
        getAttribute: name => name === 'data-i18n' ? experiences[1].roleKey : null,
        textContent: ''
    };
    const window = {
        DOM: {
            $: () => null,
            $$: selector => ({
                '[data-i18n]': [roleLabel],
                '[data-i18n-list]': [list],
                '[data-i18n-title]': [titleControl],
                '[data-i18n-aria-label]': [ariaControl]
            })[selector] || [],
            on: () => {}
        },
        Storage: { set: () => {} },
        TRANSLATIONS: translations
    };
    const metaDescription = { content: '' };
    const openGraphDescription = { content: '' };
    const document = {
        documentElement: { lang: 'es' },
        querySelector: selector => ({
            '#meta-description': metaDescription,
            '#og-description': openGraphDescription
        })[selector] || null,
        createElement: tagName => ({ tagName, textContent: '' })
    };
    window.DOM.$ = selector => ({
        '#meta-description': metaDescription,
        '#og-description': openGraphDescription
    })[selector] || null;
    const source = readFileSync(path.join(projectRoot, 'assets/js/ui/i18n.js'), 'utf8');
    vm.runInNewContext(source, { window, document });

    window.i18n.apply('en');

    assert.deepEqual(
        list.children.map(item => item.textContent),
        Array.from(getAtPath(translations.en, experiences[0].i18nKey))
    );
    assert.ok(list.children.every(item => item.tagName === 'li'));
    assert.equal(document.documentElement.lang, 'en');
    assert.equal(metaDescription.content, translations.en.meta_description);
    assert.equal(openGraphDescription.content, translations.en.meta_description);
    assert.equal(roleLabel.textContent, translations.en[experiences[1].roleKey]);
    assert.equal(titleControl.title, translations.en.language_toggle_title);
    assert.equal(ariaControl.attributes['aria-label'], translations.en.profile_open);
});