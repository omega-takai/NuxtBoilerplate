const path = require('path')

// Export a function. Accept the base config as the only param.
// SEE: https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode
module.exports = async ({ config }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push(
    {
      test: /\.sass$/,
      oneOf: [
        {
          // this matches `<style lang="sass" module>`
          resourceQuery: /module/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: {
                  localIdentName: "[local]___[hash:base64:5]",
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                implementation: require('sass'),
                sassOptions: {
                  indentedSyntax: true,
                  fiber: require('fibers'),
                },
              },
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: path.resolve(__dirname, '../assets/style/_chunk.sass')
              }
            },
          ],
        },
        {
          // this matches plain `<style lang="sass">` or `<style lang="sass" scoped>`
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                implementation: require('sass'),
                sassOptions: {
                  indentedSyntax: true,
                  fiber: require('fibers'),
                  // includePaths: [path.resolve(__dirname, '../assets/style/_chunk.sass')]
                },
              },
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: path.resolve(__dirname, '../assets/style/_chunk.sass')
              }
            },
          ],
        },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader',
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
