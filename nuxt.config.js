import Sass from 'sass'
import Fiber from 'fibers'

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

const storybookOptions = {
  storybook: {
    port: 6006,
    addons: [
      // '@storybook/addon-notes',
      '@storybook/addon-links',
      '@storybook/addon-knobs',
    ],
    stories: ['../../src/components/**/*.story.@(ts|js)'],
  },
}

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
        href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900&display=swap&subset=japanese',
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
  ],
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
  target: 'static',
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
        additionalData: "@use '@/assets/style/_not-actual-styles' as base;",
      },
    },
  },
  ...routerBase,
  ...storybookOptions,
}
