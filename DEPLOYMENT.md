# Deployment Guide - Diverse Labs

This project is a static Astro site on Cloudflare Pages.

## Do We Use Cloudflare Workers?
No. Not in the current setup.

- No Pages Functions are used.
- No Worker runtime code is required.
- `team@diverselabs.org` is currently display/contact info only.

## Recommended Deployment (Built-in Git CI/CD)
This is the simplest and preferred option.

1. Push this repository to GitHub.
2. In Cloudflare Dashboard: Workers & Pages > Create application > Pages > Connect to Git.
3. Select your repository and branch (`main`).
4. Build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Save and deploy.

Result:
- Every push to `main` triggers automatic build + deploy.
- Pull requests/other branches can get preview deployments.

## Optional CI/CD via GitHub Actions (Direct Upload)
Use this only if you prefer deploying from GitHub Actions instead of Cloudflare's Git integration.

Required GitHub Secrets:
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_PROJECT_NAME`

Deployment command pattern:
- `npx wrangler pages deploy dist --project-name=<project-name>`

## Environment Variables on Cloudflare Pages
For this site, env vars are optional.

Use only if needed:
- `PUBLIC_GA_MEASUREMENT_ID` (to enable Google Analytics script)

Where to set:
- Cloudflare Dashboard > Pages project > Settings > Variables and Secrets.
- Set separately for Preview and Production if needed.

## Custom Domain
1. Cloudflare Pages project > Custom domains > Add domain.
2. Follow DNS instructions shown in dashboard.
3. SSL is provisioned automatically.

## Verification Checklist
- Build passes locally: `npm run build`
- `dist` includes pages and `sitemap-index.xml`
- `robots.txt` exists in output
- Custom domain resolves correctly
- HTTPS certificate is active

## References
- Cloudflare Pages getting started: https://developers.cloudflare.com/pages/get-started/
- Build configuration: https://developers.cloudflare.com/pages/configuration/build-configuration/
- Direct upload with CI: https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/
- Variables and secrets for Pages: https://developers.cloudflare.com/pages/functions/bindings/#environment-variables
