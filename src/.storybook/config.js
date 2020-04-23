import { configure } from '@storybook/vue';

import '!style-loader!css-loader?sourceMap!sass-loader!../assets/style/global.scss';

// automatically import all files ending in *.story.js
configure(require.context('../components', true, /\.story\.js$/), module);
