import { defineConfig } from 'astro/config';

// Marketing site for ContentRemixer (ISI-7385, umbrella ISI-7376 workstream C).
// Static output — deployable to Vercel or GitHub Pages with zero server runtime.
//
// GitHub Pages: set `site` to the Pages URL and (for a project page) `base: '/Contentremixer-website'`.
// Vercel / custom domain: leave `base` unset. The build is plain static HTML either way.
export default defineConfig({
  site: 'https://contentremixer.dev',
  // base: '/Contentremixer-website', // uncomment for GitHub project-pages hosting
  build: { assets: '_astro' },
  compressHTML: true,
});
