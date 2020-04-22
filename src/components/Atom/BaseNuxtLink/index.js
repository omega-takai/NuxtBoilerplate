export default {
  name: 'BaseNuxtLink',
  props: {
    colorType: {
      type: String,
      default: 'green',
      validator(value) {
        return ['green', 'grey', 'white'].includes(value)
      },
    },
    exactActiveClass: {
      type: String,
      default: '',
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
      const lowcase = this.colorType.toLowerCase()
      return this.$style[lowcase]
    },
  },
}
