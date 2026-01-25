# Jay Jivandas Portfolio (Placeholder)

This is a minimal Eleventy (11ty) setup for a personal portfolio and life + career blog. Content is placeholder-only and intended to be replaced over time.

## Getting started

```bash
npm install
npm run dev
```

Eleventy will serve the site locally. Output builds to `_site/`.

## Build

```bash
npm run build
```

## Content structure

- `src/_data/career.json` for career entries
- `src/_data/projects.json` for projects
- `src/_data/hobbies.json` for hobbies
- `src/_data/timeline.json` for life timeline items
- `src/assets/resume/Resume.pdf` for the resume PDF
- `src/assets/images/` for placeholder images

Index pages and detail pages are generated from the data files using Nunjucks templates.

## Deployment

GitHub Actions builds the Eleventy site and deploys `_site/` to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`.
