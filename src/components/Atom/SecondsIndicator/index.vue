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

<style lang="sass" scoped>
$_bgColor: #E3F4F2
$_fillColor: #CDF2E9

@mixin _childElement()
  position: absolute
  width: 50%
  height: 100%
  top: 0

.secondsIndicator
  width: 100vw
  height: 100vh
  overflow: hidden
  position: relative

  .fillWrapper
    position: absolute
    width: 300%
    height: 300%
    background-color: $_bgColor
    top: -100%
    left: -100%
    &.isAnimate
      transition: transform 0.9s cubic-bezier(0.65, 0.05, 0.36, 1)

    .fillWite
      @include _childElement()
      left: 0
      background-color: $_fillColor

  .maskLeft
    @include _childElement()
    left: 0
    background-color: $_bgColor

  .maskRight
    @include _childElement()
    right: 0
    background-color: $_fillColor
</style>
