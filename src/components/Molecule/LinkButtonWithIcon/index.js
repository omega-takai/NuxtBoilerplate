import BaseFeatherIcon from '~/components/Atom/BaseFeatherIcon/index.vue'
import BaseLinkButton from '~/components/Atom/BaseLinkButton/index.vue'

export default {
  name: 'LinkButtonWithIcon',
  components: {
    BaseFeatherIcon,
    BaseLinkButton,
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
