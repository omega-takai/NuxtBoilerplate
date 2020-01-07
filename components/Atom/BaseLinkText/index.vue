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
      const lowcase = this.colorType.toLowerCase()
      return this.$style[lowcase]
    },
  },
}
</script>

<style lang="sass" module>
@mixin _structure()
  padding: 0.1em
  max-width: 90vw
  display: inline-flex
  align-items: center
  justify-content: center
  line-height: 1.2

@mixin _skin($_color)
  border-radius: pix2rem(4)
  color: $_color
  text-decoration: underline
  transition: transform 0.1s cubic-bezier(0.46, 0.03, 0.52, 0.96)
  &:hover
    text-decoration: none
    transform: scale(1.1)
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

.white
  @include _link(#{colors('white')})
</style>
