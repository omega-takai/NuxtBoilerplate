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
      matchQuerySmall: '(max-width: 560px)',
      matchQueryLarge: '(min-width: 960px)',
      localFlagIsMobile: true,
      localFlagIsDesktop: false,
    }
  },
  computed: {
    ...mapState(['isMobile', 'isTablet', 'isDesktop']),
    classNameObject() {
      return {
        'is-mobile': this.isMobile,
        'is-tablet': this.isTablet,
        'is-desktop': this.isDesktop,
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      const mqlMobile = window.matchMedia(this.matchQuerySmall)
      const mqlDesktop = window.matchMedia(this.matchQueryLarge)
      this.matchMobile(mqlMobile)
      this.matchDesktop(mqlDesktop)
      mqlMobile.addListener(this.matchMobile)
      mqlDesktop.addListener(this.matchDesktop)
    })
  },
  // TODO: Check performance addListener
  // destroyed() {},
  methods: {
    ...mapActions(['setFlagMobile', 'setFlagTablet', 'setFlagDesktop']),
    matchMobile(mql) {
      if (mql.matches) {
        this.setFlagMobile()
        this.localFlagIsMobile = true
      } else {
        this.localFlagIsMobile = false
        this.checkTablet()
      }
    },
    matchDesktop(mql) {
      if (mql.matches) {
        this.setFlagDesktop()
        this.localFlagIsDesktop = true
      } else {
        this.localFlagIsDesktop = false
        this.checkTablet()
      }
    },
    checkTablet() {
      if (!this.localFlagIsDesktop && !this.localFlagIsMobile) {
        this.setFlagTablet()
      }
    },
  },
}
</script>
