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
          { text: 'VcRedist', link: 'https://vcredist.com/' },
          { text: 'stealthpuppy', link: 'https://stealthpuppy.com/' }
        ]
      },
    ],

    logo: '/img/eucpilots.jpeg',
    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/eucpilots/evergreen' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/stealthpuppy.com' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/aaronedwardparker/' },
    ],

    footer: {
      message: 'A stealthpuppy project.',
      copyright: 'Copyright &copy; 2025 Aaron Parker.'
    },
  }
})
