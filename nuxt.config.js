import Sass from 'sass'
import Fiber from 'fibers'

const repositoryName = 'VueBoilerplate'

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
          dir: 'docs',
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
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
    // extend (config, { isClient }) {
    //   // クライアントのバンドルの Webpack 設定のみを拡張する
    //   if (isClient) {
    //     config.devtool = 'source-map'
    //   }
    // },
  },
  ...routerBase,
}
