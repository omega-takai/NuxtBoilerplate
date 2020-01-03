<template lang="pug">
  div(:class="$style.pageIndex")
    VueToNuxtLogo
</template>

<script>
import VueToNuxtLogo from '@/components/Atom/VueToNuxtLogo/index.vue'

export default {
  name: 'PageIndex',
  components: {
    VueToNuxtLogo,
  },
}
</script>

<style lang="sass" module>
.pageIndex
  position: relative
  min-height: 100vh
  width: 100vw
  margin: 0 auto
  display: flex
  justify-content: center
  align-content: center
  align-items: center
  overflow: hidden
</style>
