<template lang="pug">
  div(:class="$style.layout")

    main(:class="$style.main")
      slot
      BindNavigation(:class="$style.nav")

    BindFooter(:class="$style.footer")
</template>

<script>
import BindNavigation from '@/components/Organism/BindNavigation/index.vue'
import BindFooter from '@/components/Organism/BindFooter/index.vue'

export default {
  name: 'BaseLayout',
  components: {
    BindNavigation,
    BindFooter,
  },
}
</script>

<style lang="sass" module>
.layout
  min-height: 100vh
  width: 100vw
  overflow: hidden

  .main
    display: flex
    height: 90vh
    padding:
      right: pix2rem(16)
      left: pix2rem(16)
      bottom: 5vh
    margin: 0 auto
    justify-content: center
    align-items: center
    flex-direction: column

    .nav
      margin:
        top: pix2rem(16)

  .footer
    min-height: 10vh
</style>
