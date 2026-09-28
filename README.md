# Jay Jivandas — Personal Site

Static site built with [Eleventy (11ty)](https://www.11ty.dev/) and deployed to GitHub Pages.

## Getting started

```bash
npm install
npm run dev     # local server with live reload
npm run build   # outputs to _site/ (not committed)
```

## Where things live

- `src/_data/` — site content as JSON: `site.json` (name, contact, socials), `career.json`, `projects.json`, `hobbies.json`
- `src/content/` — longer Markdown content (`home.md`, `books.md`), loaded as `markdownContent.<name>`. `content.json` stops these files from becoming pages of their own.
- `src/_includes/layouts/base.njk` — the page shell every page uses (head tags, nav, footer)
- `src/_includes/partials/` — nav and footer
- `src/<section>/index.njk` — list pages; `src/<section>/detail.njk` — one page generated per JSON entry
- `src/assets/resume/resume.pdf` — the resume (replace this file to update it)
- `src/css/main.css` — all styles; colors (light + dark) are variables at the top
- `src/js/site.js` — site-wide JavaScript (dark mode toggle)
- `planning/` — dated roadmap files (not part of the built site)

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and deploys `_site/` to GitHub Pages.
