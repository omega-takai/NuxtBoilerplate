<template lang="pug">
  p(v-text="statusText" :class="$style.status")
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VuexStatus',
  computed: {
    ...mapState(['isMobile', 'isTablet', 'isDesktop']),
    statusText() {
      let text = 'isMobile'
      if (this.isTablet) {
        text = 'isTablet'
      } else if (this.isDesktop) {
        text = 'isDesktop'
      }
      return 'Vuex Binding: ' + text
    },
  },
}
</script>

<style lang="sass" module>
@mixin _typography()
  max-width: 100vw
  white-space: pre-line
  word-wrap: break-word
  overflow-wrap: break-word

.status
  @include _typography()
  font-size: TypeScale('body')
  font-weight: TypeWeight('body')
</style>
