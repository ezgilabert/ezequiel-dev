const { cpSync, copyFileSync, mkdirSync, rmSync } = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const file of ['index.html', '404.html']) {
    copyFileSync(path.join(root, file), path.join(output, file));
}

cpSync(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true });