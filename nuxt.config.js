import Sass from 'sass'
import Fiber from 'fibers'
// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require('path')

const routerBase = process.env.BASE_DIR
  ? {
      router: {
        base: process.env.BASE_DIR,
      },
      generate: {
        fallback: true,
        dir: 'public',
      },
    }
  : {}

export default {
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
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${process.env.BASE_DIR || '/'}favicon.ico`,
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900&display=swap&subset=japanese',
      },
    ],
  },
  loading: { color: '#ddd' },
  css: ['@/assets/style/global.scss'],
  plugins: [],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/style-resources',
  ],
  /**
   * Style Resources
   * Do not import actual styles.
   * Use this module only to import
   * variables, mixins, functions (et cetera)
   * as they won't exist in the actual build.
   */
  // styleResources: {
  //   scss: [
  //     './assets/style/_variables.scss',
  //     './assets/style/_mixins.scss',
  //     './assets/style/_functions.scss',
  //   ],
  // },
  axios: {},
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
  server: {
    port: 4000, // default: 3000
    host: 'localhost', // default: localhost
  },
  /**
   * configuration-srcDir
   * DOC: https://ja.nuxtjs.org/api/configuration-srcdir/#__layout
   */
  srcDir: 'src/',
  build: {
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
        // prependData: () => {
        //   const data01 = "@use '@/assets/style/_variables';"
        //   const data02 = "@use '@/assets/style/_mixins';"
        //   const data03 = "@use '@/assets/style/_functions';"
        //   return data01 + data02 + data03
        // }
        prependData: (loaderContext) => {
          // More information about available properties https://webpack.js.org/api/loaders/
          const { resourcePath, rootContext } = loaderContext
          const relativePath = path.relative(rootContext, resourcePath)
          console.log('prependData', relativePath)
          const data01 = "@use '@/assets/style/_variables';"
          const data02 = "@use '@/assets/style/_mixins';"
          const data03 = "@use '@/assets/style/_functions';"

          if (relativePath === 'src/assets/style/global.scss') {
            return '// global.scss'
          }
          return data01 + data02 + data03
        },
      },
    },
  },
  ...routerBase,
}
