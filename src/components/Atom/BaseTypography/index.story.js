import { storiesOf } from '@storybook/vue'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import {
  FlexLayout,
  FlexItem,
  Wrapper,
} from '@/assets/styledComponent/component'
import BaseTypography from './index.vue'

const stories = storiesOf('Design System|Atom/BaseTypography', module)

stories.addDecorator(withKnobs)

stories.add('normal', () => ({
  components: {
    BaseTypography,
    FlexLayout,
    FlexItem,
  },
  props: {
    text: {
      type: String,
      default: text('text', 'BaseTypography'),
    },
    level: {
      type: Number,
      default: number('level', 2),
    },
  },
  template: `
    <FlexLayout>
      <FlexItem>
        <BaseTypography
          :text="text"
          :level="level"
        />
      </FlexItem>
    </FlexLayout>`,
}))

stories.add('gallery', () => ({
  components: {
    BaseTypography,
    Wrapper,
  },
  template: `
    <Wrapper>
      <BaseTypography
        v-for="n in 4"
        :key="n"
        :text="'H' + n + ' Fonts'"
        :level="n"
      />
    </Wrapper>`,
}))
