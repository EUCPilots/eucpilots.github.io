import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EUC Pilots",
  description: "This is your captain speaking.",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  sitemap: {
    hostname: 'https://eucpilots.github.io/'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Projects',
        items: [
          { text: 'Evergreen', link: 'https://eucpilots.github.io/evergreen-docs/' },
          { text: 'VcRedist', link: 'https://vcredist.com/' }
        ]
      },
    ],

    logo: '/img/eucpilots.jpeg',
    sidebar: [
    ],

    socialLinks: [
    ],

    footer: {
      message: 'A stealthpuppy project.',
      copyright: 'Copyright &copy; 2025 Aaron Parker.'
    },
  }
})
