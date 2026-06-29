// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/**
 * DEV-ONLY: a tiny middleware that toggles a portfolio case study's "hidden from
 * live" state by rewriting src/data/portfolio.hidden.json. The Hide/Unhide
 * buttons on the local portfolio (rendered only when import.meta.env.DEV) POST a
 * { slug } here. This runs ONLY on the dev server (astro:server:setup) and has
 * no effect on the static production build. Commit + push the JSON to apply live.
 */
function readBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', (c) => (body += c));
    req.on('end', () => resolve(body));
  });
}

const portfolioHideToggle = {
  name: 'pf-hide-toggle-dev',
  hooks: {
    'astro:server:setup': ({ server }) => {
      const HIDDEN = new URL('./src/data/portfolio.hidden.json', import.meta.url);
      const LOCAL = new URL('./src/data/portfolio.local.json', import.meta.url);

      // ── Case-study (page) level hide/unhide ──
      server.middlewares.use('/__pf-hide', (req, res, next) => {
        if (req.method !== 'POST') return next();
        readBody(req).then((body) => {
          try {
            const { slug } = JSON.parse(body || '{}');
            const data = JSON.parse(fs.readFileSync(HIDDEN, 'utf8'));
            const set = new Set(Array.isArray(data.hidden) ? data.hidden : []);
            if (!slug || typeof slug !== 'string') throw new Error('missing slug');
            set.has(slug) ? set.delete(slug) : set.add(slug);
            data.hidden = [...set].sort();
            fs.writeFileSync(HIDDEN, JSON.stringify(data, null, 2) + '\n');
            res.setHeader('content-type', 'application/json');
            res.end(JSON.stringify({ ok: true, slug, hidden: data.hidden }));
          } catch (e) {
            res.statusCode = 400;
            res.end(JSON.stringify({ ok: false, error: String(e) }));
          }
        });
      });

      // ── Section (block) level: hide/unhide + inline text edits ──
      // POST { slug, index, op:"hide" }            → toggle a block's hidden state
      // POST { slug, index, op:"edit", path, value } → set/clear a block field edit
      server.middlewares.use('/__pf-local', (req, res, next) => {
        if (req.method !== 'POST') return next();
        readBody(req).then((body) => {
          try {
            const { slug, index, op, path, value } = JSON.parse(body || '{}');
            if (!slug || typeof index !== 'number') throw new Error('missing slug/index');
            const data = JSON.parse(fs.readFileSync(LOCAL, 'utf8') || '{}');
            const entry = (data[slug] = data[slug] || {});

            if (op === 'hide') {
              const set = new Set(Array.isArray(entry.hiddenBlocks) ? entry.hiddenBlocks : []);
              set.has(index) ? set.delete(index) : set.add(index);
              entry.hiddenBlocks = [...set].sort((a, b) => a - b);
              if (!entry.hiddenBlocks.length) delete entry.hiddenBlocks;
            } else if (op === 'edit') {
              if (!path) throw new Error('missing path');
              entry.edits = entry.edits || {};
              const blk = (entry.edits[index] = entry.edits[index] || {});
              if (value === null) {
                delete blk[path]; // reset this field to source
                if (!Object.keys(blk).length) delete entry.edits[index];
              } else {
                blk[path] = value;
              }
              if (entry.edits && !Object.keys(entry.edits).length) delete entry.edits;
            } else {
              throw new Error('unknown op');
            }
            if (!Object.keys(entry).length) delete data[slug];
            fs.writeFileSync(LOCAL, JSON.stringify(data, null, 2) + '\n');
            res.setHeader('content-type', 'application/json');
            res.end(JSON.stringify({ ok: true }));
          } catch (e) {
            res.statusCode = 400;
            res.end(JSON.stringify({ ok: false, error: String(e) }));
          }
        });
      });
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://diverselabs.org',
  output: 'static',
  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    portfolioHideToggle,
    sitemap({
      // Keep the hidden advisory portfolio out of the sitemap.
      filter: (page) => !page.includes('/portfolio/priyam-haryani'),
    }),
  ],
});