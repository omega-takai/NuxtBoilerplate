import { storiesOf } from '@storybook/vue'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import Typography from './index.vue'
import {
  FlexLayout,
  FlexItem,
  Wrapper,
} from '@/assets/styledComponent/component'

const stories = storiesOf('Design System|Atom/Typography', module)

stories.addDecorator(withKnobs)

stories.add('normal', () => ({
  components: {
    Typography,
    FlexLayout,
    FlexItem,
  },
  props: {
    text: {
      type: String,
      default: text('text', 'Typography'),
    },
    level: {
      type: Number,
      default: number('level', 2),
    },
  },
  template: `
    <FlexLayout>
      <FlexItem>
        <Typography
          :text="text"
          :level="level"
        />
      </FlexItem>
    </FlexLayout>`,
}))

stories.add('gallery', () => ({
  components: {
    Typography,
    Wrapper,
  },
  template: `
    <Wrapper>
      <Typography
        v-for="n in 4"
        :key="n"
        :text="'H' + n + ' Typography'"
        :level="n"
      />
    </Wrapper>`,
}))
