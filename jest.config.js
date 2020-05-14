module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    // '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
    //   'jest-transform-stub',
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/components/**/*.vue'],
  // globals: {
  //   'vue-jest': {
  //     resources: {
  //       scss: ['./src/assets/style/_not-actual-styles.scss'],
  //     },
  //     experimentalCSSCompile: true,
  //   },
  // },
}
