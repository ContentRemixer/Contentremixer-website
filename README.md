<p align="center">
  <a href="https://contentremixer.github.io/Contentremixer-website/">
    <img src="public/brand/png/readme_banner.png" alt="ContentRemixer — Create once. Publish everywhere." width="100%">
  </a>
</p>

<p align="center">
  <a href="https://contentremixer.github.io/Contentremixer-website/"><img src="https://img.shields.io/badge/site-live-F97316?style=flat-square&labelColor=1A1235" alt="site live"></a>
  <img src="https://img.shields.io/badge/built_with-Astro-7C3AED?style=flat-square&labelColor=1A1235&logo=astro&logoColor=F5F3FF" alt="built with Astro">
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-Apache_2.0-EC4899?style=flat-square&labelColor=1A1235" alt="license Apache 2.0"></a>
  <a href="https://github.com/ContentRemixer/Contentremixer/blob/main/docs/getting-started.md"><img src="https://img.shields.io/badge/docs-read_the_guide-7C3AED?style=flat-square&labelColor=1A1235" alt="docs"></a>
</p>

# ContentRemixer Website

The public face of **ContentRemixer** — the marketing landing page and the docs, in one repo.
_Create once. Publish everywhere._

**Live:** https://contentremixer.github.io/Contentremixer-website/

This repo hosts two surfaces that ship independently:

| Surface | What it is | Stack | Source | Dev command |
|---------|-----------|-------|--------|-------------|
| **Marketing site** | The landing page — hero, how-it-works, features, product mockups | [Astro](https://astro.build) (static) | `src/` | `npm run dev` |
| **Docs** | The guide + reference | [VitePress](https://vitepress.dev) | `docs/` | `npm run docs:dev` |

No server runtime — both build to static files you can drop on any CDN.

## Quick start

```bash
npm install
npm run dev       # marketing site → http://localhost:4321
npm run build     # static output → dist/
npm run preview   # serve the production build locally
```

Docs run on their own VitePress server:

```bash
npm run docs:dev      # guide + reference → http://localhost:5173
npm run docs:build    # static output → docs/.vitepress/dist/
```

## Project structure

```
Contentremixer-website/
├── astro.config.mjs          # env-driven config (SITE_URL + BASE_PATH)
├── src/                      # marketing site (Astro)
│   ├── pages/index.astro     # the one landing page
│   ├── layouts/Base.astro    # shell: head, OG tags, Nav + Footer
│   ├── components/           # Hero · HowItWorks · Features · Mockups · CTA · Nav · Footer
│   ├── lib/site.ts           # single source of truth for copy + outbound links
│   └── styles/global.css     # design tokens (from the S-A brand kit)
├── public/
│   ├── brand/                # logos, favicons, OG card, tokens.json (copied from the brand kit)
│   └── favicon.svg
├── docs/                     # VitePress docs (guide/, reference/)
└── .github/workflows/
    └── deploy-pages.yml       # build Astro → publish to GitHub Pages on push to main
```

A few conventions worth knowing before you edit:

- **All copy and every outbound link live in `src/lib/site.ts`.** Changing a CTA target or the
  tagline is a one-line edit there — don't hard-code links in components.
- **The landing page is CSS-only.** The crossfader hero, the product mockups, and the mockup
  tabs are pure CSS/SVG (radio-input tabs, `prefers-reduced-motion`–safe animation). No
  client JS ships, and there are no screenshots to keep in sync.
- **Brand assets are mirrored, not authored here.** `public/brand/` and the design tokens in
  `src/styles/global.css` come from the **S-A brand kit** (`branding/kit/` in the
  [main repo](https://github.com/ContentRemixer/Contentremixer)). Update them upstream, then
  re-copy — so every surface reads as one brand.

## Deploy

The site is built to be portable: one static bundle, two env vars.

| Var | Purpose | Default |
|-----|---------|---------|
| `SITE_URL` | Canonical origin for absolute OG/canonical URLs | `https://contentremixer.dev` |
| `BASE_PATH` | Sub-path the site is served under | `/` |

Every asset and link in `src/` is prefixed with `import.meta.env.BASE_URL`, so a sub-path
deploy needs **no code change** — only `BASE_PATH`.

### GitHub Pages (current)

`.github/workflows/deploy-pages.yml` builds the Astro site and publishes `dist/` on every push
to `main` (docs-only changes are ignored). It sets `BASE_PATH=/Contentremixer-website` so URLs
resolve under the project sub-path.

**One-time setup (repo admin):** Settings → Pages → _Build and deployment_ → **Source: GitHub
Actions**. The next push to `main` (or a manual **Run workflow**) publishes to:

```
https://contentremixer.github.io/Contentremixer-website/
```

> Private repos need a GitHub Pro/Team/Enterprise plan to serve Pages — otherwise make the repo
> public or deploy to Vercel.

### Custom domain

To serve at a root domain (e.g. `contentremixer.dev`):

1. Set `BASE_PATH=/` in the deploy workflow.
2. Add `public/CNAME` containing the domain.
3. Point the DNS record at GitHub Pages.

### Vercel

Import the repo in Vercel — it auto-detects Astro (build `astro build`, output `dist/`). Leave
`BASE_PATH` and `SITE_URL` unset; `base` defaults to `/`.

## The brand, in one line

ContentRemixer is the booth where one piece of reference content becomes many: drop a talk, a
blog, or a livestream into the **Crate**, and the agent opens a PR with the **remix** — cleared
and on-brand. This site tells that story; the [product lives in the main
repo](https://github.com/ContentRemixer/Contentremixer).

## License

[Apache 2.0](./LICENSE) — same as the rest of ContentRemixer.
