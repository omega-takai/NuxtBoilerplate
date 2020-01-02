<template lang="pug">
  .pageIndex
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

<style lang="sass" scoped>
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
