import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ContentRemixer',
  description: 'Create once. Publish everywhere.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Reference', link: '/reference/labels' },
    ],
    sidebar: {
      '/guide/': [
        { text: 'Getting started', link: '/guide/getting-started' },
        { text: 'Architecture', link: '/guide/architecture' },
        { text: 'Brand language', link: '/guide/brand-language' },
      ],
      '/reference/': [
        { text: 'Labels', link: '/reference/labels' },
      ],
    },
  },
})
