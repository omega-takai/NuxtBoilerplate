<template lang="pug">
  div(:class="$style.pageIndex")
    div
      VueToNuxtLogo(:class="$style.logo")
      Typography(:level="1" text="VueBoilerplate")
      VuexStatus
</template>

<script>
import VueToNuxtLogo from '@/components/Atom/VueToNuxtLogo/index.vue'
import Typography from '@/components/Atom/Typography/index.vue'
import VuexStatus from '@/components/Organism/VuexStatus/index.vue'

export default {
  name: 'PageIndex',
  components: {
    VueToNuxtLogo,
    Typography,
    VuexStatus,
  },
}
</script>

<style lang="sass" module>
.pageIndex
  min-height: 100vh
  width: 100vw
  margin: 0 auto
  display: flex
  justify-content: center
  align-items: center
  overflow: hidden

.logo
  margin: 0 auto
</style>
