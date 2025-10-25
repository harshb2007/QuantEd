# QuantEd (final build)
Modern, polished portfolio of 10 quantitative finance projects with in‑site project pages.

## How to deploy
1. Upload the entire contents of this zip to your GitHub repo (replace old files).
2. Ensure your repo is published with GitHub Pages (main / root).
3. Custom domain users: keep `CNAME` with `harshquant.com` in the root of the repo.

## Project detail pages
- Clicking **Open Project** on the homepage goes to: `/QuantEd/projects/project.html?id={id}`
- The template reads from `data/projects.json`. You can enrich each item with:
  - `overview`, `objective`, `dataset`, `metrics` (strings)
  - `methods` (array of bullets)
  - `images` (array of absolute URLs — use raw.githubusercontent.com for repo images)
  - `report` (absolute PDF URL)
  - `readme_raw` or `code_raw` (raw URL to embed README or code)

## Styling
- Single CSS: `assets/css/style.css` (Inter font, responsive layout, cards, tabs).
