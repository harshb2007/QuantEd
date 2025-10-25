
# QuantyZen Tweak Pack

This pack applies the final visual tweaks you requested without restructuring your project.

## What it does
- Centers **QuantyZen** and styles it with the blue→purple gradient (exact look from your screenshot).
- Makes **"Teaching Quantitative Finance Through Models"** white and a bit bigger.
- Enlarges the **author line** in bold yellow.
- Turns **project titles** green.
- Renames / styles **"View on GitHub (Code)"** in yellow and opens in a new tab.
- Makes a **sticky Back** button (always visible at top-left on project pages).
- Uses larger white **SUMMARY** heading.
- Keeps result images nicely **auto‑fitted** (no over‑zoom).

## How to install (1 minute)
1) Copy the two files below into the same folder as your existing HTML (usually the site root):
   - `quantyzen-overrides.css`
   - `quantyzen-helpers.js`

2) In **index.html** (and each project page), add the following lines:
   Place the CSS before the closing `</head>`:
   ```html
   <link rel="stylesheet" href="quantyzen-overrides.css">
   ```
   Place the JS before the closing `</body>`:
   ```html
   <script src="quantyzen-helpers.js"></script>
   ```

3) Replace the hero block at the top of **index.html** with the content of `hero-snippet.html`, or
   just paste the snippet below right under your nav:
<!-- QuantyZen hero (replace the top hero block with this snippet) -->
<header class="hero" style="margin-top:40px;margin-bottom:24px;">
  <h1 class="brand-title" id="brandTitle">QuantyZen</h1>
  <p class="subtitle" id="siteTagline">Teaching Quantitative Finance Through Models</p>
  <p class="author-line" id="authorLine">
    By Harsh Byjesh — Aspiring Princeton ORFE student.
  </p>
</header>

4) Project pages:
   - Make sure there is a Back link in the document with `id="backTop"` or just let the helper create one automatically.
   - Ensure the **SUMMARY** heading uses one of these classes/ids so it picks the white larger style:
     `summary-title` or `#summaryTitle`.

You're done. Re‑publish to GitHub Pages and the changes will be live.

---
**Note:** The pack does not remove any of your existing styles; it only overrides them using specific selectors.
If something doesn't take effect, send me the page, and I’ll fine‑tune a selector for that element.
