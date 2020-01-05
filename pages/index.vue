<template lang="pug">
  div(:class="$style.pageIndex")

    main(:class="$style.main")
      VueToNuxtLogo
      Typography(:level="1" text="VueBoilerplate")

    BindFooter(:class="$style.footer")
</template>

<script>
import VueToNuxtLogo from '@/components/Atom/VueToNuxtLogo/index.vue'
import Typography from '@/components/Atom/Typography/index.vue'
import BindFooter from '@/components/Organism/BindFooter/index.vue'

export default {
  name: 'PageIndex',
  components: {
    VueToNuxtLogo,
    Typography,
    BindFooter,
  },
}
</script>

<style lang="sass" module>
.pageIndex
  min-height: 100vh
  width: 100vw
  overflow: hidden

  .main
    display: flex
    height: 90vh
    padding-bottom: 5vh
    margin: 0 auto
    justify-content: center
    align-items: center
    flex-direction: column

  .footer
    min-height: 10vh
</style>
