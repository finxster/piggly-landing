# Piggly Landing

Static marketing page for **Piggly**, a family app for managing kids' allowances. Built with Vite and vanilla HTML/CSS/JS — no framework. Bilingual (EN / PT-BR) with a client-side language toggle.

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:5184
npm run build      # outputs dist/
npm run preview    # serves dist/ on http://localhost:5184
```

## Project structure

```
.
├── index.html       # markup, with data-i18n hooks
├── style.css        # page styles (imports tokens.css)
├── tokens.css       # design tokens (colors, type, radius, shadow)
├── main.js          # language toggle
├── public/assets/   # logo SVGs, app icon, favicon (served at /assets/*)
├── vite.config.js   # pins dev/preview to port 5184
└── package.json
```

## Canonical URL & social previews

Open Graph / Twitter Card meta tags in `index.html` point at `https://piggly.pages.dev/`. If you deploy under a different domain, search and replace that URL in `index.html` (3 occurrences: `<link rel="canonical">`, `og:url`, and the absolute image URLs).

## Deploy to Cloudflare Pages

1. Push this repo to GitHub or GitLab.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git** and select the repo.
3. Configure the build:
   - **Framework preset:** None
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Under **Environment variables**, add:
   - `NODE_VERSION` = `20`
5. Save and deploy. Cloudflare will rebuild on every push to the production branch.

For preview deployments per pull request, no extra config is needed — Pages handles it automatically.
