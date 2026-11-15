# Oleksii Bezklynskyi — portfolio

Personal site: case studies, services for local businesses, recognition and contacts. Ukrainian and English.

**Live:** https://ttjelky.github.io/portfolio/

## Stack

[Astro](https://astro.build) · TypeScript · plain CSS · no client framework (≈5 KB of JS).
Font: Inter Tight (self-hosted). Images are optimised to WebP with `srcset` at build time.

## Structure

```
src/
  data/projects.ts      projects: texts (UA/EN), roles, stack, screenshots
  i18n.ts               UI strings, contacts, URL helpers
  components/           page sections (Hero, Work, Services, Awards, About, Contact)
  pages/[lang]/         home and /work/<slug>/ case pages for each language
  pages/index.astro     root: redirects to the visitor’s device language
  scripts/site.ts       all client-side behaviour
  styles/global.css     design tokens and base styles
scripts/
  og.html, cv.html      templates for social preview images and the CV
  make-assets.mjs       renders public/og/*.png and public/cv/*.pdf with Chrome
```

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321/portfolio/
npm run build      # type check + static build into dist/
npm run assets     # regenerate OG images and CV PDFs (needs Google Chrome)
```

## Adding a project

1. Put screenshots into `src/assets/projects/<slug>/`.
2. Add an entry to `PROJECTS` in `src/data/projects.ts`.
3. Add its name and tagline to `scripts/make-assets.mjs` and run `npm run assets`.

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages via
[GitHub Actions](.github/workflows/deploy.yml).
