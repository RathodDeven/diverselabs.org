// Transpile the design-import .jsx sources -> minified plain JS for the browser.
// JSX is compiled to React.createElement (classic runtime, global React UMD).
// Each file is wrapped in an IIFE so top-level consts (Easing/clamp/Stage…) stay
// isolated — required because NudgeFlow loads animations.js + scenes.js into the
// same window and both declare those names. Cross-file refs go through window.*.
import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

const SRC = 'showcase-src';
const OUT = 'public/showcase';
const targets = [
  ['hero/hero.jsx',             'hero/hero.js'],
  ['nudgeflow/animations.jsx',  'nudgeflow/animations.js'],
  ['nudgeflow/scenes.jsx',      'nudgeflow/scenes.js'],
  ['crm/crm-video.jsx',         'crm/crm-video.js'],
];

for (const [src, out] of targets) {
  const code = fs.readFileSync(path.join(SRC, src), 'utf8');
  const res = await esbuild.transform(code, {
    loader: 'jsx',
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    minify: true,
    target: 'es2019',
    legalComments: 'none',
  });
  const wrapped = '(function(){"use strict";\n' + res.code + '\n})();\n';
  fs.writeFileSync(path.join(OUT, out), wrapped);
  console.log(`${out}  ${(wrapped.length / 1024).toFixed(1)} KB`);
}
console.log('build ok');
