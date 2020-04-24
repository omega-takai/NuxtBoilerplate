import BaseFeatherIcon from '~/components/Atom/BaseFeatherIcon/index.vue'
import BaseLinkText from '@/components/Atom/BaseLinkText/index.vue'

export default {
  name: 'LinkTextWithIcon',
  components: {
    BaseFeatherIcon,
    BaseLinkText,
  },
  props: {
    iconName: {
      type: String,
      default: 'TwitterIcon',
    },
    iconSize: {
      type: String,
      default: '1.5x',
    },
    colorType: {
      type: String,
      default: 'green',
      validator(value) {
        return ['green', 'grey', 'white'].includes(value)
      },
    },
    text: {
      type: String,
      require: true,
      default: 'Text',
    },
    url: {
      type: String,
      require: true,
      default: 'https://ja.nuxtjs.org/',
    },
  },
}
