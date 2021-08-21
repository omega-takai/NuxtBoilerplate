module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard',
    "stylelint-config-sass-guidelines",
    "stylelint-config-rational-order",
    // 'stylelint-config-primer',
    'stylelint-config-prettier',
  ],
  plugins: [
    "stylelint-scss",
    "stylelint-order",
    "stylelint-config-rational-order/plugin"
    // "stylelint-config-primer/plugin"
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {}
}
