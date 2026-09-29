/**
 * contact.js
 * Manage contact form interactions and email copying.
 */

const contact = (() => {
    const { $, on } = window.DOM;
    const MAX_CHARS = 1000;
    const NEAR_LIMIT = 900;
    const WEB3FORMS_ACCESS_KEY = '1541835c-c017-486b-a9a5-5a510b5e51e5';

    async function copyEmail(email) {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(email);
            } else {
                const tmp = document.createElement('input');
                tmp.value = email;
                document.body.appendChild(tmp);
                tmp.select();
                document.execCommand('copy');
                document.body.removeChild(tmp);
            }
        } finally {
            const t = window.TRANSLATIONS[window.i18n.getCurrent()];
            window.toast.show(t.toast_copy + email);
        }
    }

    function updateCounter() {
        const textarea = $('#contact-message');
        const counter = $('#contact-counter');
        if (!textarea || !counter) return;

        const len = textarea.value.length;
        counter.textContent = `${len} / ${MAX_CHARS}`;
        counter.classList.toggle('is-near', len >= NEAR_LIMIT && len < MAX_CHARS);
        counter.classList.toggle('is-max', len >= MAX_CHARS);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const outputBox = $('#contact-output');
        const outText = $('#contact-out-text');
        const form = $('#contact-form');
        const name = $('#contact-name').value.trim();
        const email = $('#contact-email').value.trim();
        const message = $('#contact-message').value.trim();
        const submitButton = form.querySelector('[type="submit"]');
        const botcheck = form.querySelector('[name="botcheck"]');
        const t = window.TRANSLATIONS[window.i18n.getCurrent()];

        if (form.dataset.submitting === 'true') return;
        if (!form.reportValidity()) return;
        if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
            window.toast.show(t.toast_send_config);
            return;
        }

        form.dataset.submitting = 'true';
        submitButton.disabled = true;

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name,
                    email,
                    message,
                    subject: `Nuevo mensaje del portfolio de ${name}`,
                    botcheck: botcheck.checked ? 'true' : ''
                })
            });
            const result = await response.json();

            if (!response.ok || !result.success) throw new Error('Web3Forms rejected the submission');

            outText.textContent = t.toast_send;
            outputBox.classList.remove('hidden');
            window.toast.show(t.toast_send);
            form.reset();
            updateCounter();
            setTimeout(() => {
                outputBox.classList.add('hidden');
            }, 4000);
        } catch (error) {
            window.toast.show(t.toast_send_error);
        } finally {
            delete form.dataset.submitting;
            submitButton.disabled = false;
        }
    }

    function init() {
        const emailLink = $('#email-link');
        if (emailLink) on(emailLink, 'click', () => copyEmail(emailLink.href.replace('mailto:', '')));

        const form = $('#contact-form');
        if (form) on(form, 'submit', handleSubmit);

        const textarea = $('#contact-message');
        if (textarea) {
            on(textarea, 'input', updateCounter);
            updateCounter();
        }
    }

    return { init, copyEmail, handleSubmit };
})();

window.contact = contact;