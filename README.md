# Oregon High School Cricket League — Website

Static site for OHCL. No build step: open `index.html` in a browser, or host the folder on GitHub Pages / Netlify.

- `index.html` — page content
- `styles.css` — styles
- `script.js` — mobile menu, animations, contact form (`CONTACT_EMAIL` at the top)
- `assets/logo.svg` — logo / favicon

## Deployment

Every push to `main` deploys to GitHub Pages via `.github/workflows/pages.yml`.
If the first run fails at "Configure Pages", go to **Settings → Pages** and set **Source** to **GitHub Actions**, then re-run the workflow.
The site will be at https://ntshah28.github.io/OHCLWebsite/
