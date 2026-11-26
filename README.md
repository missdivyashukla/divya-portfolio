# Divya Shukla SEO Portfolio

Static site (HTML, CSS, vanilla JavaScript). No framework and no npm dependencies.
Each portfolio section is its own page, switched with URL hashes (`#home`, `#intro`,
`#proof-of-work`, `#skills`, `#case-studies`, `#career`, `#about`, `#contact`, `#ask-the-cat`),
so it works on any static host with no rewrite rules.

## Deploy to Cloudflare Pages

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (the folder containing `package.json`) |
| Node version | 20 (set by `.node-version`) |

Dashboard: Workers & Pages > Create > Pages > Connect to Git, pick the repo, enter the values above.

Direct upload instead of Git: run `npm run build`, then `npx wrangler pages deploy dist`
(or drag the `dist` folder into the dashboard's Direct Upload).

## Getting the files into GitHub with the folders intact

GitHub's web "upload files" page can drop folders if you select files individually.
Use one of these instead:

1. **Git (most reliable).** Unzip, open a terminal inside the unzipped folder, then:

       git init
       git add -A
       git commit -m "Portfolio"
       git branch -M main
       git remote add origin https://github.com/<you>/<repo>.git
       git push -u origin main --force

2. **GitHub web upload.** Drag the folders `src` and `scripts` themselves (not the files inside them)
   together with `package.json`, `package-lock.json`, `wrangler.toml`, `README.md`, `.gitignore`
   and `.node-version` into the upload box. Hidden files such as `.gitignore` and `.node-version`
   are easy to miss; they are optional but recommended.

After uploading, the repository root must show `src/`, `scripts/` and `package.json`.
`npm run build` stops with a list of missing files if the structure is wrong.

## Local preview

    npm run dev      # builds, then serves dist/ at http://localhost:8788

## Project layout

    src/index.html        all pages (one <section> or <div class="page"> per route)
    src/css/styles.css    theme tokens at the top of :root
    src/js/main.js        router, game, chatbot, interactions, homepage content lists
    src/assets/           Catalyst illustrations (do not edit or replace)
    src/_headers          security headers and asset caching (Cloudflare Pages)
    scripts/build.mjs     copies src/ to dist/ and checks local asset references

## Editing homepage content

Open `src/js/main.js` and find the block headed `HOMEPAGE CONTENT`. The lists
`CAPS`, `STEPS`, `BUILT`, `EXPLORING`, `MINI_TL` and `FUN` drive the capability cards,
process steps, project gallery, "Currently exploring", mini timeline and fun facts.

## Notes

- Fonts (Fredoka, Inter) load from Google Fonts; the CSP in `src/_headers` allows exactly that.
- Metrics marked "reported" on the homepage were supplied by the site owner.
- Add a custom domain under the Pages project's Custom domains tab.
