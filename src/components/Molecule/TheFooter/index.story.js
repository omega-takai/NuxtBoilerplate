import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import TheFooter from './index.vue'
import { Wrapper } from '@/assets/styledComponent/component'

const stories = storiesOf('Design System|Molecule/TheFooter', module)

stories.addDecorator(withKnobs)

stories.add('normal', () => ({
  components: {
    TheFooter,
    Wrapper,
  },
  props: {
    bindStatus: {
      type: String,
      default: text('bindStatus', 'Vuex Binding'),
    },
    repoUrl: {
      type: String,
      default: text('repoUrl', 'https://github.com/nuxt/nuxt.js'),
    },
    authorName: {
      type: String,
      default: text('authorName', 'Author Name'),
    },
    authorPosition: {
      type: String,
      default: text('authorPosition', 'UI Designer / Front-end Engineer'),
    },
    twitterUrl: {
      type: String,
      default: text('twitterUrl', 'https://twitter.com/nuxt_js'),
    },
  },
  template: `
    <Wrapper>
      <TheFooter
        :bindStatus="bindStatus"
        :repoUrl="repoUrl"
        :authorName="authorName"
        :authorPosition="authorPosition"
        :twitterUrl="twitterUrl"
      />
    </Wrapper>`,
}))
