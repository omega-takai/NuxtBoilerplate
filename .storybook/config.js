import { configure } from '@storybook/vue';

import '!style-loader!css-loader?sourceMap!sass-loader!../src/assets/style/global.scss';

// automatically import all files ending in *.story.js
configure(require.context('../src/components', true, /\.story\.js$/), module);
