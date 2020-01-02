<template lang="pug">
  time(
    :class="className"
    :datetime="datetime"
    v-text="text"
  )
</template>

<script>
export default {
  name: 'BaseTime',
  props: {
    text: {
      type: String,
      require: true,
      default: '2020/12/24',
    },
    isTime: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      regex: /\//g,
    }
  },
  computed: {
    className() {
      return this.isTime ? 'time' : 'date'
    },
    datetime() {
      if (this.isTime) {
        // 08:45
        return this.text
      } else {
        // 2020-12-24
        return this.text.replace(this.regex, '-')
      }
    },
  },
}
</script>

<style lang="sass" scoped>
@mixin _skin()
  font:
    family: TypeFamily('number')
    weight: TypeWeight('number')
  line-height: 1
  display: block

.time
  @include _skin()
  font-size: TypeScale('h1')
  color: colors('font')

.date
  @include _skin()
  font-size: TypeScale('h4')
  color: colors('fontSub')
</style>
