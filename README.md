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

### Deploy

Static output (`dist/`) deploys to **Vercel** or **GitHub Pages** with no server runtime.
For GitHub project-pages hosting, uncomment `base` in `astro.config.mjs`.

## Docs

```bash
npm run docs:dev      # VitePress docs at /guide, /reference
npm run docs:build
```

- `docs/index.md` — landing
- `docs/guide/` — getting started, architecture, brand language
- `docs/reference/` — labels
