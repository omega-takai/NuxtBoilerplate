<template lang="pug">
  .secondsIndicator
    .fillWrapper(
      :style="computedStyle"
      :class="computedClass"
    )
      .fillWite
    .maskLeft(v-show="showLeft")
    .maskRight(v-show="!showLeft")
</template>

<script>
export default {
  name: 'SecondsIndicator',
  props: {
    seconds: {
      type: [String, Number],
      default: '30',
      validator(value) {
        const num = parseInt(value)
        return num >= 0 && num <= 60
      },
    },
  },
  computed: {
    parsedSeconds() {
      return parseInt(this.seconds, 10)
    },
    sec2deg() {
      return this.parsedSeconds * 6
    },
    computedStyle() {
      return {
        transform: `rotate(${this.sec2deg}deg)`,
      }
    },
    computedClass() {
      const sec = this.parsedSeconds
      return {
        isAnimate: sec > 0,
      }
    },
    showLeft() {
      return this.parsedSeconds <= 30
    },
  },
}
</script>

<style lang="sass" src="./index.sass" scoped />
