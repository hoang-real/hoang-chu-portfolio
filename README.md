# Hoang Chu — Portfolio

React + Vite portfolio. Main content lives in `src/data/content.js`.

## Local preview

Use a working Node.js 22.12+ installation (Node 22 LTS recommended).

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite. For a production check, run `npm run build`, then `npm run preview`.

If your system Node fails with a missing `libsimdjson` library, this working command uses the Codex bundled runtime on this Mac:

```sh
PATH=/Users/hoangreal/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH npm run dev
```

## GitHub Pages

1. Create an empty public repository named `portfolio` in your GitHub account. Do not initialize it with a README.
2. This folder already contains a Git repository and focused commits on main. From this folder, run the commands below. Replace YOUR_USERNAME with your GitHub username.

```sh
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

3. Open the repository's Settings → Pages → Build and deployment. Set Source to GitHub Actions.
4. Open Actions → Deploy portfolio to GitHub Pages → Run workflow → main → Run workflow. If the initial push failed before Pages was enabled, rerun the workflow.
5. Wait for build and deploy to finish successfully. Open the URL shown by the deploy job (normally https://YOUR_USERNAME.github.io/portfolio/).
6. Future pushes to main update the website automatically.

Do not choose branch-based publishing of the source files: Vite must build them first. Relative asset paths and hash routing support both repository Pages sites and username.github.io sites. The thoughts page is `/#/thoughts` relative to the site root.

GitHub reference: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Content notes

Updated from SWE_NewGrad.pdf supplied by the user. Name, education, graduation date, internship titles/dates, experience descriptions, projects, technologies, and LinkedIn follow that résumé. The previously supplied GitHub profile is retained. Awards absent from the new résumé were removed.

Experience impact numbers overlapping prior hypothetical teaching examples are omitted pending explicit confirmation. The Fantasy Premier League project follows the user’s correction: automated injury-news collection and probabilistic player availability for recommendations. Its description uses the résumé bullet approved by the user; no predictive accuracy metrics are claimed. Hyperschedule and RAG Law Partner descriptions and metrics come from the new résumé and are user-supplied, not independently verified. No résumé download is exposed while these discrepancies remain.

Original source credit: Anh Ngo portfolio template; its personal content was removed while retaining the visual design and duck illustrations.
