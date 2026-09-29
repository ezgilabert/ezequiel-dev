# Ezequiel Garcia Gilabert Portfolio

A responsive personal portfolio for a Senior .NET Full Stack Developer. It presents professional experience, technical skills, education, and contact links in a bilingual Spanish/English interface.

## Features

- Experience, skills, education, and contact sections.
- Spanish and English UI text, including localized experience and education lists.
- Light and dark themes with a canvas-based cosmic animation.
- Responsive profile sidebar and expandable experience and education cards.
- Contact details with email copying and a character counter.

## Run Locally

Open `index.html` in a browser. It can be opened directly from disk after the generated stylesheet has been built.

Tailwind CSS, Phosphor Icons, Inter, and JetBrains Mono are built or copied into local assets. No external CDN is needed for styling, fonts, or icons.

To rebuild the generated assets after changing utility classes, fonts, or icon packages:

```sh
npm install
npm run build
```

The build outputs the deployable static site to `dist/`, which is the publish directory configured in Netlify.

## Tests

The tests use Node.js built-in modules. From the project root, run:

```sh
npm test
```

The tests check local script paths and dependency order, verify both language translations, and cover successful and rejected contact form submissions.

## Project Structure

```text
assets/
  css/       Base layout and component styles
  icons/     Technology and social icons
  img/       Profile imagery
  js/
    core/    DOM, storage, and event helpers
    data/    Portfolio content, icons, and translations
    ui/      Tabs, profile cards, contact, theme, and renderers
    cosmos/  Canvas animation and its visual systems
tests/       Node.js checks for script loading and translations
```

Application scripts are classic browser scripts listed in dependency order at the end of `index.html`. Keep that order intact when adding or moving scripts; the script-order test checks key dependencies.

## Contact Form

The contact form sends messages to [Web3Forms](https://web3forms.com/) from the browser. Its access key is configured in `assets/js/ui/contact.js` and is intended to be used client-side. Restrict the key to the portfolio's domain in the Web3Forms dashboard before publishing. The form includes a honeypot field and reports errors without clearing the user's message.