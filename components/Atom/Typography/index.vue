<template lang="pug">
  component(
    :is="tagName"
    :class="tagName"
    v-text="text"
  )
</template>

<script>
export default {
  name: 'Typography',
  props: {
    text: {
      type: String,
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
</script>

<style lang="sass" scoped>
@mixin _typography()
  display: block
  color: colors('font')
  line-height: 1.15
  max-width: 100vw
  // Extra
  white-space: pre-line
  word-wrap: break-word
  overflow-wrap: break-word

.h1
  @include _typography()
  font-size: TypeScale('h1')
  font-weight: TypeWeight('h1')

.h2
  @include _typography()
  font-size: TypeScale('h2')
  font-weight: TypeWeight('h2')

.h3
  @include _typography()
  font-size: TypeScale('h3')
  font-weight: TypeWeight('h3')

.h4
  @include _typography()
  font-size: TypeScale('h4')
  font-weight: TypeWeight('h4')
</style>
