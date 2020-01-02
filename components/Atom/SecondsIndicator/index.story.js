import { storiesOf } from '@storybook/vue'
import { withKnobs, number } from '@storybook/addon-knobs'
import SecondsIndicator from './index.vue'

const stories = storiesOf('Design System|Atom/SecondsIndicator', module)

stories.addDecorator(withKnobs)

stories.add('normal', () => ({
  components: {
    SecondsIndicator,
  },
  props: {
    seconds: {
      type: Number,
      default: number('seconds', 30),
    },
  },
  template: `
    <div>
      <SecondsIndicator :seconds="seconds" />
    </div>`,
}))
