import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './docs',
  title: "EUC Pilots",
  description: "This is your captain speaking.",
  head: [['link', { rel: 'icon', href: '/eucpilots2.png' }]],
  sitemap: {
    hostname: 'https://eucpilots.github.io/'
  },
  cleanUrls: true,
  // ignoreDeadLinks: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'stealthpuppy.com', link: 'https://stealthpuppy.com/' },
      { text: 'Evergreen', link: 'https://eucpilots.github.io/evergreen-docs/' },
      { text: 'VcRedist', link: 'https://vcredist.com/' },
      { text: 'Defaults', link: 'https://stealthpuppy.com/defaults' },
      { text: 'Nerdio Manager', link: 'https://github.com/aaronparker/nerdio-actions/' },
      { text: 'Evergreen App Tracker', link: 'https://stealthpuppy.com/apptracker' },
      { text: 'More',
        items: [
          { text: 'PSPackageFactory', link: 'https://stealthpuppy.com/packagefactory' },
          { text: 'Microsoft 365 Apps packager', link: 'https://github.com/aaronparker/m365apps' },
          { text: 'Intune Remediations', link: 'https://github.com/aaronparker/remediations' },
          { text: 'Intune Baseline', link: 'https://github.com/aaronparker/intune-baseline' },
          { text: 'Azure Virtual Desktop', link: 'https://github.com/aaronparker/azurevirtualdesktop' }
        ]
      },
    ],

    logo: '/img/eucpilot.png',
    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/eucpilots/' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/stealthpuppy.com' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/aaronedwardparker/' },
    ],

    footer: {
      message: 'A stealthpuppy project. <a target="_blank" href="https://icons8.com/icon/tI2IB1EJFmdP/greentech">Greentech</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>. <a target="_blank" href="https://icons8.com/icon/gc3EFfPcJEXt/deployment">Deployment</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>',
      copyright: 'Copyright &copy; 2025 Aaron Parker.'
    },
  }
})
