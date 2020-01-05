<template lang="pug">
  div(:class="$style.pageIndex")

    main(:class="$style.main")
      VueToNuxtLogo
      Typography(:level="1" text="VueBoilerplate")

    footer(:class="$style.footer")
      VuexStatus
      p repository link
      p author name (UI Designer / Front-end Engineer)
      p author twitter
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
    background-color: colors('inverted')
    color: colors('white')
    font-size: TypeScale('body')
    font-weight: TypeWeight('body')
    padding: 3em 5em
</style>
