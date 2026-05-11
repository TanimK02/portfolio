# Portfolio

Single-page portfolio built with Vite, React, and TypeScript. Content is driven by small files under `src/data/` and `src/content/` so you can update copy and project listings without touching layout code.

## Scripts

- **`npm run dev`** — start the dev server with hot reload.
- **`npm run build`** — typecheck and emit a production bundle to `dist/`.
- **`npm run preview`** — serve the production build locally.

## Customize

| What | Where |
|------|--------|
| Name, role, tagline | `src/data/site.ts` |
| Projects | `src/data/projects.ts` |
| About text & skills | `src/content/about.ts` |
| Email & social links | `src/data/contact.ts` |

Optional project images: add files under `public/` (for example `public/screenshots/my-app.png`) and set `image: '/screenshots/my-app.png'` on a project.

## Deploy

Build output is static (`dist/`). Host on Netlify, Cloudflare Pages, GitHub Pages, or any static file host.

If the site is served from a **subpath** (not the domain root), set `base` in `vite.config.ts` to that path (for example `base: '/repo-name/'`).
# portfolio
