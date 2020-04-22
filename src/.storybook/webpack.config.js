const path = require('path')

const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: true,
  },
}

const cssLoaderModule = {
  loader: 'css-loader',
  options: {
    sourceMap: true,
    modules: {
      localIdentName: "[local]___[hash:base64:5]",
    },
  },
}
const sassLoader = {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
    implementation: require('sass'),
    sassOptions: {
      fiber: require('fibers'),
    },
  },
}

const sassResourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: path.resolve(__dirname, '../assets/style/_chunk.scss')
  }
}

// Export a function. Accept the base config as the only param.
// SEE: https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode
module.exports = async ({ config }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push(
    {
      test: /\.scss$/,
      oneOf: [
        {
          // this matches `<style lang="sass" module>`
          resourceQuery: /module/,
          use: [
            'vue-style-loader',
            cssLoaderModule,
            sassLoader,
            sassResourcesLoader,
          ],
        },
        {
          use: [
            'vue-style-loader',
            cssLoader,
            sassLoader,
            sassResourcesLoader,
          ],
        },
      ],
    },
    {
      test: /\.css$/,
      sideEffects: true,
      use: [
        'vue-style-loader',
        {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: [
              require('autoprefixer')({ grid: 'autoplace' })
            ],
          }
        }
      ],
    },
    {
      test: /\.pug$/,
      oneOf: [
        {
          resourceQuery: /^\?vue/,
          use: ['pug-plain-loader']
        },
      ],
    }
  );

  config.resolve.alias = {
    '~': path.join(__dirname, '../'),
    '@': path.join(__dirname, '../'),
    vue$: 'vue/dist/vue.esm.js',
  }

  // Return the altered config
  return config;
};
