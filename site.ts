export default {
  name: 'Vue Designer',
  description: 'Vue Designer Nuxt Vuetify - Quick start template',
  logo: 'i-vscode-icons:file-type-coffeelint',
  author: 'Pinegrow',
  url: 'https://pg-nuxt-vuetify.netlify.app',
  github: 'https://github.com/pinegrow/pg-nuxt-vuetify',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'Home', link: '/', type: 'primary', icon: 'i-mdi-home' },
    { text: 'Store', link: '/store', type: 'primary', icon: 'i-mdi-home' },
    {
      text: 'Quick Start',
      link: '/quick-start',
      type: 'primary',
      icon: 'i-mdi-home',
    },
    {
      text: 'Subscribe',
      link: '/subscribe',
      type: 'primary',
      icon: 'i-mdi-home',
    },
  ],
}
