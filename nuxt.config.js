export default {
  mode: 'universal',
  server: {
    port: 1301
  },
  // Target Deployment
  target: 'server',
  //rendering mode SSR
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.Title,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'theme-color', name: 'theme-color', content: '#167DF0' },
      { hid: 'description', name: 'description', content: process.env.description },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:title', name: 'og:title', content: process.env.title },
      { hid: 'og:site_name', name: 'og:site_name', content: process.env.title },
      { hid: 'og:locale', name: 'og:locale', content: 'en_ID' },
      { hid: 'og:url', name: 'og:url', content: process.env.baseUrl },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:image', name: 'og:image', content: '/mti.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'mti.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
    '@/assets/css/icons.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  styleResources: {
    scss: [
      './assets/vars/*.scss'
    ]
   },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    '@nuxtjs/style-resources'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },

  proxy: {
    '/v1': {
      // target: 'https://backend.mti39dinus.xyz/',
      target: 'https://backend.mti39dinus.xyz/',
      pathRewrite: { '^/v1': '/' },
      changeOrigin: true
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'T.A. Image Processing, MTI Reg 39.',
      author: 'nuxtcraft',
      // 'theme-color': '#7BAE91',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent'
    },
    manifest: {
      name: 'T.A. Image Processing, MTI Reg 39',
      short_name: 'T.A. Image Processing',
      description: 'T.A. Image Processing, MTI Reg 39.',
      lang: 'en'
    },
    icon: {
      fileName: 'mti.png',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    }
  },

  env: {
    baseUrl: 'https://kumpulip.mti39dinus.xyz' || 'http://localhost:3939',
    Title: 'Kumpul T.A. Image Processing',
    description: 'Kumpul T.A. Image Processing',
    author: 'Mochammad Agus Idris',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (!config.externals) {
        config.externals = {}
      }
    }
  }
}
