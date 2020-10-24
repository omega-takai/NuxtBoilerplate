export default {
  name: 'BaseLinkText',
  props: {
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
      default: '###',
    },
  },
  computed: {
    className() {
      const lowercase = this.colorType.toLowerCase()
      return this.$style[lowercase]
    },
  },
}
