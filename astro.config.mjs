import { defineConfig } from 'astro/config';

// Marketing site for ContentRemixer (ISI-7385, umbrella ISI-7376 workstream C).
// Static output — deployable to GitHub Pages or Vercel with zero server runtime.
//
// Hosting is driven by two build-time env vars so the same config works everywhere:
//   SITE_URL   — canonical origin, used for absolute OG/canonical URLs
//   BASE_PATH  — sub-path the site is served under ("/" for a custom domain or an
//                org/user root page; "/Contentremixer-website" for a project page)
//
// GitHub Pages (project page):   BASE_PATH=/Contentremixer-website  (set in the deploy workflow)
// GitHub Pages (custom domain):  leave BASE_PATH unset (defaults to "/") + add public/CNAME
// Vercel:                        leave both unset.
//
// All asset/link references in src/ are prefixed with import.meta.env.BASE_URL, so a
// sub-path deploy needs no code changes — only the BASE_PATH env var.
export default defineConfig({
  site: process.env.SITE_URL || 'https://contentremixer.dev',
  base: process.env.BASE_PATH || '/',
  build: { assets: '_astro' },
  compressHTML: true,
});
