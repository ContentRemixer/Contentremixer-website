# ContentRemixer Website

Public marketing site **+** docs for ContentRemixer. _Create once. Publish everywhere._

This repo hosts two things:

| Surface | Stack | Source | Dev command |
|---------|-------|--------|-------------|
| **Marketing site** (landing) | [Astro](https://astro.build) (static) | `src/` | `npm run dev` |
| **Docs** | [VitePress](https://vitepress.dev) | `docs/` | `npm run docs:dev` |

## Marketing site

Built for ISI-7385 (umbrella ISI-7376, workstream C). A single static landing page:
animated crossfader hero, how-it-works, feature grid, three product mockups (The Booth,
Issue → PR, remix outputs), and CTAs into the Getting Started guide.

- Brand assets come from the **S-A brand kit** (`branding/kit/` in the main repo) — palette,
  Poppins, logos, favicons, OG card — copied into `public/brand/`.
- Design tokens live in `src/styles/global.css`; all outbound links are centralized in
  `src/lib/site.ts` (repoint the docs URL there once hosted docs are finalized).

```bash
npm install
npm run dev       # marketing site at http://localhost:4321
npm run build     # static output in dist/
npm run preview   # preview the production build
```

### Deploy to GitHub Pages

A workflow is included at `.github/workflows/deploy-pages.yml`. It builds the Astro site and
publishes `dist/` to Pages on every push to `main` (docs-only changes are ignored).

**One-time setup (repo admin):** Settings → Pages → _Build and deployment_ → **Source: GitHub
Actions**. The next push to `main` (or a manual **Run workflow**) publishes the site at:

```
https://contentremixer.github.io/Contentremixer-website/
```

The workflow sets `BASE_PATH=/Contentremixer-website` so all asset/link URLs are served under
that project sub-path. All references in `src/` are already base-aware
(`import.meta.env.BASE_URL`), so nothing else needs to change.

**Custom domain** (e.g. `contentremixer.dev`) or an **org/user root page**: set `BASE_PATH` to
`/` in the workflow, add a `public/CNAME` file containing the domain, and point the DNS record
at GitHub Pages. (Private repos need a GitHub Pro/Team/Enterprise plan to serve Pages.)

### Deploy to Vercel

Import the repo in Vercel; it auto-detects Astro (build `astro build`, output `dist/`). Leave
`BASE_PATH`/`SITE_URL` unset (base defaults to `/`).

## Docs

```bash
npm run docs:dev      # VitePress docs at /guide, /reference
npm run docs:build
```

- `docs/index.md` — landing
- `docs/guide/` — getting started, architecture, brand language
- `docs/reference/` — labels
