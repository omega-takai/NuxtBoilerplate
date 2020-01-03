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
</script>

<style lang="sass" scoped>
@mixin _structure()
  min-height: pix2rem(48)
  min-width: pix2rem(160)
  padding: pix2rem(8) pix2rem(16)
  max-width: 90vw
  display: inline-flex
  align-items: center
  justify-content: center
  line-height: 1.2

@mixin _skin($_color)
  border-radius: pix2rem(4)
  border: 1px solid $_color
  color: $_color
  text-decoration: none
  &:hover
    color: white
    background-color: $_color
  // Extra
  white-space: pre-line
  word-wrap: break-word
  overflow-wrap: break-word

@mixin _button($_color)
  @include _structure()
  @include _skin($_color)

// Style Instance ===============
.buttonGreen
  @include _button(#3b8070)

.buttonGrey
  @include _button(#35495e)
</style>
