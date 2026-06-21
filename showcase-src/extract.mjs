// Extract exact .jsx source bytes for the design imports from the session
// transcript (inline tool results) + the persisted scenes.jsx result.
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve('showcase-src');
const wanted = {
  'hero.jsx':       path.join(ROOT, 'hero/hero.jsx'),
  'animations.jsx': path.join(ROOT, 'nudgeflow/animations.jsx'),
  'scenes.jsx':     path.join(ROOT, 'nudgeflow/scenes.jsx'),
  'crm-video.jsx':  path.join(ROOT, 'crm/crm-video.jsx'),
};
const found = {};

function consider(str) {
  if (typeof str !== 'string' || str.indexOf('"method":"get_file"') === -1) return;
  let o;
  try { o = JSON.parse(str); } catch { return; }
  if (o && o.method === 'get_file' && o.path && typeof o.content === 'string' && !o.truncated) {
    found[o.path] = o.content; // last full copy wins
  }
}
function walk(v) {
  if (v == null) return;
  if (typeof v === 'string') return consider(v);
  if (Array.isArray(v)) return v.forEach(walk);
  if (typeof v === 'object') { for (const k in v) walk(v[k]); }
}

// 1) transcript (inline full results: hero/animations/crm-video)
const tx = process.argv[2];
for (const line of fs.readFileSync(tx, 'utf8').split('\n')) {
  if (!line.trim()) continue;
  try { walk(JSON.parse(line)); } catch {}
}

// 2) persisted full scenes.jsx result
const persisted = process.argv[3];
if (persisted && fs.existsSync(persisted)) {
  try {
    const o = JSON.parse(fs.readFileSync(persisted, 'utf8'));
    if (o.method === 'get_file' && o.path && typeof o.content === 'string') found[o.path] = o.content;
  } catch (e) { console.error('persisted parse failed:', e.message); }
}

let ok = true;
for (const [name, dest] of Object.entries(wanted)) {
  if (found[name] == null) { console.error('MISSING:', name); ok = false; continue; }
  fs.writeFileSync(dest, found[name]);
  console.log(`wrote ${dest}  (${found[name].length} bytes)`);
}
process.exit(ok ? 0 : 1);
