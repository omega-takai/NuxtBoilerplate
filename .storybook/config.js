/**
 * DOC: https://storybook.js.org/docs/configurations/default-config/#css-support
 * DOC: https://webpack.js.org/concepts/loaders/#inline
 */
import { configure } from '@storybook/vue';

import '!style-loader!css-loader?sourceMap!sass-loader?{"additionalData":"@use \'./not-actual-styles\' as base;"}!../src/assets/style/global.scss';

// automatically import all files ending in *.story.js
configure(require.context('../src/components', true, /\.story\.js$/), module);
