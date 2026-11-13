// Single source of truth for site metadata and outbound links.
// Repoint docs/getting-started here once the hosted docs URL is finalized —
// every CTA on the site reads from this file.

export const SITE = {
  name: 'ContentRemixer',
  tagline: 'Create once. Publish everywhere.',
  description:
    'The agentic content-remixing platform for DevRel teams. Drop a talk, a blog, or a livestream into the Crate — the agent opens a PR with the remix, cleared and on-brand.',
  url: 'https://contentremixer.dev',
  ogImage: '/brand/png/og_image.png',
} as const;

// Outbound links. S-E Getting Started + detailed docs live in the main repo /docs
// (ISI-7382). These are the live targets today; swap to a hosted docs URL in one place.
export const LINKS = {
  gettingStarted:
    'https://github.com/ContentRemixer/Contentremixer/blob/main/docs/getting-started.md',
  docs: 'https://github.com/ContentRemixer/Contentremixer/tree/main/docs',
  architecture:
    'https://github.com/ContentRemixer/Contentremixer/blob/main/docs/design/phase1-operator-design.md',
  repo: 'https://github.com/ContentRemixer/Contentremixer',
} as const;

export const NAV = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'The Booth', href: '#mockups' },
  { label: 'Docs', href: LINKS.docs },
] as const;
