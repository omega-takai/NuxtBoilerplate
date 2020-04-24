import { storiesOf } from '@storybook/vue'
import { withKnobs, radios } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import BaseFeatherIcon from './index.vue'
import { FlexLayout, FlexItem } from '@/assets/styledComponent/component'

const iconSize = ['24', '1x', '1.5x', '2x', '3x', '4x']
const icons = [
  'ArrowDownLeftIcon',
  'ArrowDownRightIcon',
  'ArrowDownIcon',
  'ArrowLeftIcon',
  'ArrowRightIcon',
  'ArrowUpLeftIcon',
  'ArrowUpRightIcon',
  'ArrowUpIcon',
  'FacebookIcon',
  'GithubIcon',
  'InstagramIcon',
  'TwitterIcon',
]

storiesOf('Design System|Atom/BaseFeatherIcon', module)
  .addDecorator(withKnobs)
  .add('normal', () => ({
    components: {
      BaseFeatherIcon,
      FlexLayout,
      FlexItem,
    },
    data() {
      return {
        icons,
      }
    },
    props: {
      iconSize: {
        type: String,
        default: radios('iconSize', iconSize, iconSize[2]),
      },
    },
    template: `
      <FlexLayout>
        <FlexItem
          v-for="(name, i) in icons"
          :key="i"
          :alt="name"
          :title="name"
        >
          <BaseFeatherIcon
            :iconName="name"
            :iconSize="iconSize"
            @click.native="action"
          />
        </FlexItem>
      </FlexLayout>`,
    methods: {
      action: action('clicked'),
    },
  }))
