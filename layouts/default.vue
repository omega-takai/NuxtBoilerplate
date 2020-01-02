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
      // ref: https://hashimotosan.hatenablog.jp/entry/2019/05/28/164834
      matchQueryMobile: '(max-width: 560px)',
    }
  },
  computed: {
    ...mapState(['isDesktop', 'isMobile']),
    classNameObject() {
      return {
        'is-desktop': this.isDesktop,
        'is-mobile': this.isMobile,
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      // SEE: https://developer.mozilla.org/ja/docs/Web/API/Window/matchMedia
      const mqMobile = window.matchMedia(this.matchQueryMobile)
      this.matchMobile(mqMobile)
      mqMobile.addListener(this.matchMobile)
    })
  },
  destroyed() {
    const mqMobile = window.matchMedia(this.matchQueryMobile)
    this.matchMobile(mqMobile)
    mqMobile.removeListener(this.matchMobile)
  },
  methods: {
    ...mapActions(['setDeviceFlag']),
    matchMobile(mql) {
      console.log('Fire matchMobile', mql.matches)
      this.setDeviceFlag(mql.matches)
    },
  },
}
</script>
