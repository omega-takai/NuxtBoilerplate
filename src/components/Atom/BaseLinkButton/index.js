export default {
  name: 'BaseLinkButton',
  props: {
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
      default: '###',
    },
  },
  computed: {
    className() {
      const rawName = this.colorType
      const lowcase = rawName.toLowerCase()
      const upperCamelCase = lowcase.charAt(0).toUpperCase() + lowcase.slice(1)
      return `button${upperCamelCase}`
    },
  },
}
