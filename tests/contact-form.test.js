const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const source = readFileSync(path.join(__dirname, '../assets/js/ui/contact.js'), 'utf8')
    .replace(/const WEB3FORMS_ACCESS_KEY = '[^']+';/, "const WEB3FORMS_ACCESS_KEY = 'test-access-key';");

function createContactHarness(fetchImpl) {
    const toasts = [];
    const botcheck = { checked: false };
    const form = {
        dataset: {},
        querySelector: selector => selector === '[name="botcheck"]' ? botcheck : button,
        reportValidity: () => true,
        reset: () => { form.wasReset = true; }
    };
    const button = { disabled: false };
    const message = { value: 'Hello from the portfolio' };
    const feedback = { classList: { add() {}, remove() {} } };
    const elements = {
        '#contact-form': form,
        '#contact-name': { value: 'Ada Lovelace' },
        '#contact-email': { value: 'ada@example.com' },
        '#contact-message': message,
        '#contact-output': feedback,
        '#contact-out-text': { textContent: '' },
        '#contact-counter': { textContent: '', classList: { toggle() {} } }
    };
    const window = {
        DOM: { $: selector => elements[selector], on() {} },
        TRANSLATIONS: {
            es: {
                toast_send: 'Mensaje enviado.',
                toast_send_error: 'No se pudo enviar.',
                toast_send_config: 'Formulario sin configurar.'
            }
        },
        i18n: { getCurrent: () => 'es' },
        toast: { show: message => toasts.push(message) }
    };

    vm.runInNewContext(source, { window, fetch: fetchImpl, setTimeout() {} });
    return { contact: window.contact, form, button, toasts };
}

test('sends a Web3Forms request and resets the form only after success', async () => {
    let request;
    const harness = createContactHarness(async (url, options) => {
        request = { url, options };
        return { ok: true, json: async () => ({ success: true }) };
    });
    let prevented = false;

    await harness.contact.handleSubmit({ preventDefault: () => { prevented = true; } });

    assert.equal(prevented, true);
    assert.equal(request.url, 'https://api.web3forms.com/submit');
    assert.equal(request.options.method, 'POST');
    assert.deepEqual(JSON.parse(request.options.body), {
        access_key: 'test-access-key',
        name: 'Ada Lovelace',
        email: 'ada@example.com',
        message: 'Hello from the portfolio',
        subject: 'Nuevo mensaje del portfolio de Ada Lovelace',
        botcheck: ''
    });
    assert.equal(harness.form.wasReset, true);
    assert.deepEqual(harness.toasts, ['Mensaje enviado.']);
    assert.equal(harness.button.disabled, false);
});

test('keeps the form contents and reports an error when Web3Forms rejects the request', async () => {
    const harness = createContactHarness(async () => ({
        ok: false,
        json: async () => ({ success: false })
    }));

    await harness.contact.handleSubmit({ preventDefault() {} });

    assert.equal(harness.form.wasReset, undefined);
    assert.deepEqual(harness.toasts, ['No se pudo enviar.']);
    assert.equal(harness.button.disabled, false);
    assert.equal(harness.form.dataset.submitting, undefined);
});