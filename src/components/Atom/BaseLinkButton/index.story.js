import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import BaseLinkButton from './index.vue'
import { FlexLayout, FlexItem } from '@/assets/styledComponent/component'

const colors = ['green', 'grey']

const stories = storiesOf('Design System|Atom/BaseLinkButton', module)

stories.addDecorator(withKnobs)

stories.add('normal', () => ({
  components: {
    BaseLinkButton,
    FlexLayout,
    FlexItem,
  },
  data() {
    return {
      colors,
    }
  },
  props: {
    text: {
      type: String,
      default: text('text', 'Button'),
    },
  },
  template: `
    <FlexLayout>
      <FlexItem
        v-for="(color, i) in colors"
        :key="i"
      >
        <BaseLinkButton
          :title="color"
          :text="text"
          :colorType="color"
          @click.native.prevent="action"
        />
      </FlexItem>
    </FlexLayout>`,
  methods: {
    action: action('clicked'),
  },
}))

stories.add('Too Much Text', () => ({
  components: {
    BaseLinkButton,
    FlexLayout,
    FlexItem,
  },
  props: {
    textWithBreak: {
      type: String,
      default: text('Sentences With Line Breaks', 'Base\nLink\nButton'),
    },
    longText: {
      type: String,
      default: text('Long Sentence', 'Base Link Button '.repeat(10)),
    },
  },
  template: `
    <FlexLayout>
      <FlexItem>
        <BaseLinkButton
          :text="textWithBreak"
          colorType="green"
        />
      </FlexItem>
      <FlexItem>
        <BaseLinkButton
          :text="longText"
          colorType="green"
        />
      </FlexItem>
    </FlexLayout>`,
}))
