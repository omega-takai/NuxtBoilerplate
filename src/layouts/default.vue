<template lang="pug">
  div(:class="classNameObject")
    nuxt
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'LayoutDefault',
  data() {
    return {
      localFlagIsMobile: true,
      localFlagIsDesktop: false,
    }
  },
  computed: {
    ...mapState(['isMobile', 'isTablet', 'isDesktop']),
    classNameObject() {
      return {
        [this.$style.root]: true,
        [this.$style.isMobile]: this.isMobile,
        [this.$style.isTablet]: this.isTablet,
        [this.$style.isDesktop]: this.isDesktop,
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      const mqlMobile = window.matchMedia(this.$style.mqlMobile)
      const mqlDesktop = window.matchMedia(this.$style.mqlDesktop)
      this.matchMobile(mqlMobile)
      this.matchDesktop(mqlDesktop)
      mqlMobile.addListener(this.matchMobile)
      mqlDesktop.addListener(this.matchDesktop)
    })
  },
  // TODO: Check performance addListener
  // destroyed() {},
  methods: {
    ...mapActions(['setFlagMobile', 'setFlagTablet', 'setFlagDesktop']),
    matchMobile(mql) {
      if (mql.matches) {
        this.setFlagMobile()
        this.localFlagIsMobile = true
      } else {
        this.localFlagIsMobile = false
        this.checkTablet()
      }
    },
    matchDesktop(mql) {
      if (mql.matches) {
        this.setFlagDesktop()
        this.localFlagIsDesktop = true
      } else {
        this.localFlagIsDesktop = false
        this.checkTablet()
      }
    },
    checkTablet() {
      if (!this.localFlagIsDesktop && !this.localFlagIsMobile) {
        this.setFlagTablet()
      }
    },
  },
}
</script>

<style lang="sass" module>
// String from Sass to JS
@value mqlMobile: #{$mql-mobile}
@value mqlDesktop: #{$mql-desktop}

.root
  background-color: colors('background')

@mixin _flashAnimation
  $_inCubic: cubic-bezier(0.55, 0.06, 0.68, 0.19)
  animation-duration: 1.5s !important
  animation-timing-function: $_inCubic !important
  animation-delay: 0s !important
  animation-iteration-count: 1 !important
  animation-direction: reverse !important
  animation-fill-mode: none !important
  animation-play-state: running !important

@keyframes flashA
  0%
    background-color: colors('background')
  100%
    background-color: burlywood

@keyframes flashB
  0%
    background-color: colors('background')
  100%
    background-color: burlywood

.isDesktop
  @include _flashAnimation
  animation-name: flashA !important

.isTablet
  @include _flashAnimation
  animation-name: flashB !important

.isMobile
  @include _flashAnimation
  animation-name: flashA !important
</style>
