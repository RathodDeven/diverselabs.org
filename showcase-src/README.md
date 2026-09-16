# Showcase videos (Claude Design imports)

The home page embeds three animated "video" montages that were authored in
**claude.ai/design** and imported via the `claude_design` MCP. Each is a
self-contained React component rendered through a tiny `<iframe>` harness — no
React on the main site, full style/JS isolation, and the browser defers
off-screen iframes for free.

## Source → output

`*.jsx` here are the **exact** design sources. `build.mjs` transpiles them with
esbuild (JSX → `React.createElement`, minified, IIFE-wrapped) into
`public/showcase/<name>/*.js`.

| Source | Output | Global | Used by |
|---|---|---|---|
| `hero/hero.jsx` | `public/showcase/hero/hero.js` | `window.DiverseHero` | hero showreel |
| `nudgeflow/animations.jsx` | `public/showcase/nudgeflow/animations.js` | `window.Stage` (engine) | NudgeFlow |
| `nudgeflow/scenes.jsx` | `public/showcase/nudgeflow/scenes.js` | `window.NudgeFlowReel` | NudgeFlow |
| `crm/crm-video.jsx` | `public/showcase/crm/crm-video.js` | `window.CRMVideo` | CRM explainer |

The per-video `index.html` harnesses, the `_vendor/` React UMD builds, and the
image assets (`uploads/`, `assets/`) live directly under `public/showcase/` and
are committed.

## Rebuild after editing a `.jsx`

```bash
node showcase-src/build.mjs
```

## Local edits applied on top of the imports

- `hero/hero.jsx`: added a `controls` prop on `Stage` (hero hides the scrubber),
  a `window.__dlPlay` hook so the page can pause the loop when it scrolls
  off-screen, and `useState(0)` so the hero always opens from t=0.
- `nudgeflow/animations.jsx` + `crm/crm-video.jsx` (they carry a byte-identical
  copy of the engine, so keep `Stage`/`PlaybackBar`/`IconButton` in sync between
  them): the imported `Stage` was an authoring tool, and on a marketing page it
  behaved badly. Three things changed.
  1. **Hover no longer seeks.** The import piped the hovered track position
     straight into the playhead, so brushing past the scrubber yanked the film
     to wherever the cursor happened to be. Hover now draws a marker and a
     timecode and nothing else; only a press or a drag moves the playhead.
  2. **No persisted playhead.** It used to save the position to `localStorage`
     and resume there, so a second visit dropped you into the middle of the
     explainer. Playback always opens at 0. The old `persistKey` prop is still
     accepted (the `index.html` harnesses pass it) but is ignored.
  3. **Video-player manners.** Clicking the picture toggles play, with a brief
     centre badge so the click registers; the bar is monochrome to match the
     site instead of the editor's blue; timecodes are `m:ss` rather than frame-
     accurate `m:ss.cs`; the track is a real `role="slider"` and runs on pointer
     events, so it scrubs on touch too.

## How they're wired in

- **Hero** (`src/pages/index.astro`): autoplaying `<iframe loading="eager">`,
  `pointer-events:none`; an `IntersectionObserver` posts `dl-play`/`dl-pause` so
  the rAF loop only runs while the hero is on-screen.
- **NudgeFlow + CRM**: facade cards (poster + play button). The iframe is only
  created on click — nothing loads until the visitor hits play.

Styles: `.hero-showreel*` and `.showcase-*` in `src/styles/global.css`.
