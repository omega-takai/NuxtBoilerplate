import Sass from 'sass'
import Fiber from 'fibers'

const repositoryName = 'NuxtBoilerplate'

// DEPLOY_ENV が GH_PAGES の場合のみ router.base = '/<repository-name>/' を追加する
// SEE: https://ja.nuxtjs.org/api/configuration-router/
// SEE: https://ja.nuxtjs.org/faq/github-pages/
// SEE: https://nuxtjs.org/api/configuration-builddir
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: `/${repositoryName}/`,
        },
        generate: {
          fallback: true, // '404.html' を使用したい場合
          dir: 'public',
        },
      }
    : {}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900&display=swap&subset=japanese',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ddd' },
  /*
   ** Global CSS
   */
  css: ['@/assets/style/main.sass'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    sass: ['./assets/style/_chunk.sass'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
  /*
   ** Serve configuration
   */
  server: {
    port: 4000, // default: 3000
    host: 'localhost', // default: localhost
  },
  /**
   * configuration-srcdir
   * DOC: https://ja.nuxtjs.org/api/configuration-srcdir/#__layout
   */
  srcDir: 'src/',
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
            },
          ],
        ]
      },
    },
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
  },
  ...routerBase,
}
