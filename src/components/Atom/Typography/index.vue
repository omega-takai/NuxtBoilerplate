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

<style lang="sass" src="./index.sass" scoped />
