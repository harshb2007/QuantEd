# Harsh — Quant Portfolio Website

Static website ready for **GitHub Pages** or **Netlify**. Lists 10 quant research projects with search, sort, and teaching-first copy.

## Quick Start
1. Download the ZIP and unzip it.
2. Open `index.html` locally to preview.
3. To deploy on **GitHub Pages**:  
   - Create a new repo (e.g., `quant-portfolio-site`).  
   - Upload the contents of this folder (or push via git).  
   - In repo settings → *Pages* → Source = `Deploy from a branch`, Branch = `main`, Folder = `/root`.  
   - Wait ~1–2 minutes; your site will be live.
4. To deploy on **Netlify**: drag the folder into app.netlify.com or connect your Git repo.

## Customize
- Update project data in `data/projects.json` (titles, summaries, links).
- Edit colors/typography in `assets/css/style.css`.
- Modify structure/layout in `index.html`.

## Attribution
Designed and built by Harsh Byjesh as an open-education portfolio to empower under-resourced students learning quantitative finance.


## Per-Project Pages
Each project now has its own page under `/projects/<id>/index.html` with slots for images, code, and a report.

## Embed Your Real Outputs
For each project (e.g., `/projects/01/`):
- Replace `assets/img/projects/01-main.png` with your thumbnail.
- Replace `assets/img/projects/01-chart.png` with your equity/metric chart.
- Replace `projects/01/snippet.py` with a real minimal example.
- Add `projects/01/report.pdf` and link it in `projects/01/index.html`.
