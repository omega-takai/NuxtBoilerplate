<template lang="pug">
  a(
    target="_blank"
    :title="text"
    :href="url"
    :class="className"
  )
    slot
    span(v-text="text")
</template>

<script>
export default {
  name: 'BaseLinkText',
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
      const lowcase = this.colorType.toLowerCase()
      return this.$style[lowcase]
    },
  },
}
</script>

<style lang="sass" module>
@mixin _structure()
  padding: 0.1em 0.5em
  max-width: 90vw
  display: inline-flex
  align-items: center
  justify-content: center
  line-height: 1.2

@mixin _skin($_color)
  border-radius: pix2rem(4)
  color: $_color
  text-decoration: underline
  &:hover
    color: white
    background-color: $_color
  // Extra
  white-space: pre-line
  word-wrap: break-word
  overflow-wrap: break-word

@mixin _link($_color)
  @include _structure()
  @include _skin($_color)

// Style Instance ===============
.green
  @include _link(#{colors('green')})

.grey
  @include _link(#{colors('inverted')})
</style>
