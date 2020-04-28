import { mapActions, mapState } from 'vuex'

export default {
  name: 'LayoutDefault',
  data() {
    return {
      localFlagIsMobile: true,
      localFlagIsDesktop: false,
    }
  },
  computed: {
    ...mapState('device-type', ['isMobile', 'isTablet', 'isDesktop']),
    classNameObject() {
      return {
        [this.$style.root]: true,
        [this.$style.isMobile]: this.isMobile,
        [this.$style.isTablet]: this.isTablet,
        [this.$style.isDesktop]: this.isDesktop,
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      // SEE: https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener
      const mqlMobile = window.matchMedia('(max-width: 560px)')
      const mqlDesktop = window.matchMedia('(min-width: 961px)')
      // initial screen test
      this.matchMobile(mqlMobile)
      this.matchDesktop(mqlDesktop)
      // Start observing the screen size
      mqlMobile.addListener(this.matchMobile)
      mqlDesktop.addListener(this.matchDesktop)
    })
  },
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
