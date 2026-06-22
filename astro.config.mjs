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
const portfolioHideToggle = {
  name: 'pf-hide-toggle-dev',
  hooks: {
    'astro:server:setup': ({ server }) => {
      const FILE = new URL('./src/data/portfolio.hidden.json', import.meta.url);
      server.middlewares.use('/__pf-hide', (req, res, next) => {
        if (req.method !== 'POST') return next();
        let body = '';
        req.on('data', (c) => (body += c));
        req.on('end', () => {
          try {
            const { slug } = JSON.parse(body || '{}');
            const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));
            const set = new Set(Array.isArray(data.hidden) ? data.hidden : []);
            if (!slug || typeof slug !== 'string') throw new Error('missing slug');
            set.has(slug) ? set.delete(slug) : set.add(slug);
            data.hidden = [...set].sort();
            fs.writeFileSync(FILE, JSON.stringify(data, null, 2) + '\n');
            res.setHeader('content-type', 'application/json');
            res.end(JSON.stringify({ ok: true, slug, hidden: data.hidden }));
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