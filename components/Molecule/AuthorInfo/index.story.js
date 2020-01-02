import { storiesOf } from '@storybook/vue'
import { withKnobs, text, object } from '@storybook/addon-knobs'
import AuthorInfo from './index.vue'
import { FlexLayout, FlexItem } from '@/assets/styledComponent/component'

const defaultObjectA = {
  iconName: 'TwitterIcon',
  text: 'Twitter',
  url: 'https://twitter.com/TomonariTakai',
}

const defaultObjectB = {
  iconName: 'GithubIcon',
  text: 'GitHub',
  url: 'https://github.com/t--takai',
}

const stories = storiesOf('Design System|Molecule/AuthorInfo', module)

stories.addDecorator(withKnobs)

stories.add('normal', () => ({
  components: {
    AuthorInfo,
    FlexLayout,
    FlexItem,
  },
  props: {
    title: {
      type: String,
      default: text('title', 'Author Info'),
    },
    authorDataA: {
      type: Object,
      default: object('authorDataA', defaultObjectA),
    },
    authorDataB: {
      type: Object,
      default: object('authorDataB', defaultObjectB),
    },
  },
  template: `
    <FlexLayout>
      <FlexItem>
        <AuthorInfo
          :title="title"
          :authorData="[authorDataA, authorDataB]"
        />
      </FlexItem>
    </FlexLayout>`,
}))
