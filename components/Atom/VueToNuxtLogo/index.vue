<template lang="pug">
  div(:class="$style.vueToNuxtLogo")
    div(:class="$style.two")
    div(:class="$style.one")
    div(:class="$style.three")
    div(:class="$style.four")
</template>

<script>
export default {
  name: 'VueToNuxtLogo',
}
</script>

<style lang="sass" module>
.vueToNuxtLogo
  display: block
  animation: turn 2s linear forwards 1s !important
  transform: rotateX(180deg)
  position: relative
  overflow: hidden
  height: 180px
  width: 245px

  @mixin _triangle($top, $left)
    position: absolute
    top: #{$top}px
    left: #{$left}px
    width: 0
    height: 0

  .one
    @include _triangle(0, 0)
    border-left: 105px solid transparent
    border-right: 105px solid transparent
    border-bottom: 180px solid #41b883

  .two
    @include _triangle(30, 35)
    animation: goright 0.5s linear forwards 3.5s !important
    border-left: 87.5px solid transparent
    border-right: 87.5px solid transparent
    border-bottom: 150px solid #3b8070

  .three
    @include _triangle(60, 35)
    animation: goright 0.5s linear forwards 3.5s !important
    border-left: 70px solid transparent
    border-right: 70px solid transparent
    border-bottom: 120px solid colors('inverted')

  .four
    @include _triangle(120, 70)
    animation: godown 0.5s linear forwards 3s !important
    border-left: 35px solid transparent
    border-right: 35px solid transparent
    border-bottom: 60px solid colors('background')

@keyframes turn
  100%
    transform: rotateX(0deg)

@keyframes godown
  100%
    top: 180px

@keyframes goright
  100%
    left: 70px
</style>
