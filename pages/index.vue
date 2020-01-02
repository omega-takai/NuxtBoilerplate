<template lang="pug">
  .pageIndex
    Indicator.base
    DigitalClock
</template>

<script>
import { mapActions } from 'vuex'

// import AuthorInfo from '~/components/Molecule/AuthorInfo/index.vue'
import DigitalClock from '~/components/Organism/DigitalClock/index.vue'
import Indicator from '~/components/Organism/Indicator/index.vue'

export default {
  name: 'PageIndex',
  components: {
    DigitalClock,
    Indicator,
  },
  data() {
    return {
      timer: null,
    }
  },
  created() {
    this.getDate()
  },
  mounted() {
    this.timer = setInterval(this.getDate, 1000)
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    ...mapActions(['getDate']),
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

  .base
    position: absolute
    top: 0
    left: 0
    z-index: -1
</style>
