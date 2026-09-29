const { copyFileSync, mkdirSync } = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');

function copy(source, destination) {
    const target = path.join(root, destination);
    mkdirSync(path.dirname(target), { recursive: true });
    copyFileSync(path.join(root, 'node_modules', source), target);
}

for (const weight of [300, 400, 500, 600, 700]) {
    copy(
        `@fontsource/inter/files/inter-latin-${weight}-normal.woff2`,
        `assets/fonts/inter-latin-${weight}-normal.woff2`
    );
}

for (const weight of [400, 500, 600]) {
    copy(
        `@fontsource/jetbrains-mono/files/jetbrains-mono-latin-${weight}-normal.woff2`,
        `assets/fonts/jetbrains-mono-latin-${weight}-normal.woff2`
    );
}

for (const style of ['bold', 'fill']) {
    const iconStyle = style[0].toUpperCase() + style.slice(1);
    copy(
        `@phosphor-icons/web/src/${style}/style.css`,
        `assets/css/vendor/phosphor-${style}.css`
    );
    copy(
        `@phosphor-icons/web/src/${style}/Phosphor-${iconStyle}.woff2`,
        `assets/css/vendor/Phosphor-${iconStyle}.woff2`
    );
}