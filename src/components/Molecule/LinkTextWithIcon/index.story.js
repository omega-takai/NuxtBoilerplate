import { storiesOf } from '@storybook/vue'
import { withKnobs, radios } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import LinkTextWithIcon from './index.vue'
import { FlexLayout, FlexItem } from '@/assets/styledComponent/component'

const colors = ['green', 'grey']
const icons = ['TwitterIcon', 'FacebookIcon', 'GithubIcon', 'InstagramIcon']

const stories = storiesOf('Design System|Molecule/LinkTextWithIcon', module)

stories.addDecorator(withKnobs)

stories.add('normal', () => ({
  components: {
    LinkTextWithIcon,
    FlexLayout,
    FlexItem,
  },
  data() {
    return {
      colors,
    }
  },
  props: {
    iconName: {
      type: String,
      default: radios('iconName', icons, icons[0]),
    },
  },
  template: `
    <FlexLayout>
      <FlexItem
        v-for="(color, i) in colors"
        :key="i"
      >
        <LinkTextWithIcon
          url="https://ja.nuxtjs.org/"
          :iconName="iconName"
          :text="upperCamelCase(color)"
          :colorType="color"
          @click.native.prevent="action"
        />
      </FlexItem>
    </FlexLayout>`,
  methods: {
    action: action('clicked'),
    upperCamelCase(colorType) {
      const lowcase = colorType.toLowerCase()
      return lowcase.charAt(0).toUpperCase() + lowcase.slice(1)
    },
  },
}))
