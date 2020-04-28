export default {
  name: 'BaseTypography',
  props: {
    text: {
      type: [String, Number],
      default: '15:00',
    },
    level: {
      type: Number,
      default: 2,
      validator(value) {
        return value >= 1 && value <= 4
      },
    },
  },
  computed: {
    tagName() {
      return `h${this.level}`
    },
  },
}
