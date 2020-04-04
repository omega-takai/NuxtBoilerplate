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

<style lang="sass" src="./index.sass" module />
