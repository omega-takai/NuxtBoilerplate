import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import BaseTime from './index.vue'
import { FlexLayout, FlexItem } from '@/assets/styledComponent/component'

const stories = storiesOf('Design System|Atom/BaseTime', module)

stories.addDecorator(withKnobs)

stories.add('normal', () => ({
  components: {
    BaseTime,
    FlexLayout,
    FlexItem,
  },
  props: {
    time: {
      type: String,
      default: text('time', '08:45'),
    },
    date: {
      type: String,
      default: text('date', '2020/12/24'),
    },
  },
  template: `
    <FlexLayout>
      <FlexItem>
        <BaseTime
          :text="date"
          :isTime="false"
        />
        <BaseTime
          :text="time"
          :isTime="true"
        />
      </FlexItem>
    </FlexLayout>`,
}))
