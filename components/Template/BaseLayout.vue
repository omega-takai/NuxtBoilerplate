<template lang="pug">
  div(:class="$style.layout")

    main(:class="$style.main")
      slot

    BindFooter(:class="$style.footer")
</template>

<script>
import BindFooter from '@/components/Organism/BindFooter/index.vue'

export default {
  name: 'BaseLayout',
  components: {
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
    padding-bottom: 5vh
    margin: 0 auto
    justify-content: center
    align-items: center
    flex-direction: column

  .footer
    min-height: 10vh
</style>
