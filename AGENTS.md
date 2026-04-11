# AGENTS.md

## Project Snapshot
- Project: Diverse Labs marketing website
- Stack: Astro 6, React (islands where needed), Tailwind CSS 4
- Output mode: Static site
- Deploy target: Cloudflare Pages (Git integration)
- Primary CTA: https://calendar.app.google/auAoqGcMKPTePphG9
- Secondary contact: team@diverselabs.org

## Core Product Intent
- Premium monochrome agency website
- Very fast load and minimal runtime overhead
- SEO-first and crawlable HTML
- No fake case studies; only real work entries

## Commands
- Dev: npm run dev
- Build: npm run build
- Preview: npm run preview

## Required Agent Workflow
After any code change, the agent must do all of the following:
1. Run a build and ensure it succeeds.
2. Check VS Code Problems/diagnostics.
3. Report diagnostics in the response.

### Mandatory Problem Reporting Format
- If there are problems:
  - Provide total count.
  - Provide file path and line for each.
  - Provide a short fix plan (or apply fix if requested).
- If there are no problems:
  - Explicitly state that Problems count is 0.

## Current Known Problems (as of 2026-04-11)
Total: 2

1. src/components/BackgroundShader.astro:221
- Issue: Class field named animate conflicts with HTMLElement.animate type.

2. src/components/BackgroundShader.astro:269
- Issue: BackgroundShader is not assignable to CustomElementConstructor because of the animate conflict above.

## Content/Asset Conventions
- Logo path: /public/logo.svg (or /public/logo.png)
- Favicon path: /public/favicon.ico
- OG image path: /public/og-image.png
- Work image folder: /public/work

Current work image names:
- /public/work/nudgeflow.webp
- /public/work/bloomerstv.webp
- /public/work/paiso.webp
- /public/work/danz-now.webp
- /public/work/hand-protocol.webp

## Deployment Notes
- Use Cloudflare Pages Git integration as default CI/CD path.
- Build command: npm run build
- Output directory: dist
- Environment vars are optional. Use PUBLIC_GA_MEASUREMENT_ID only if analytics is enabled.

## Guardrails
- Avoid adding unused services (Workers, SMTP, form providers) unless explicitly requested.
- Keep dependencies current and minimal.
- Preserve performance-first decisions for static output.
