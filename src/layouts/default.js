import { mapActions, mapState } from 'vuex'

export default {
  name: 'LayoutDefault',
  data() {
    return {
      localFlagIsMobile: true,
      localFlagIsDesktop: false,
      mqlMobile: '(max-width: 560px)',
      mqlDesktop: '(min-width: 961px)',
    }
  },
  computed: {
    ...mapState(['isMobile', 'isTablet', 'isDesktop']),
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
      const mqlMobile = window.matchMedia(this.mqlMobile)
      const mqlDesktop = window.matchMedia(this.mqlDesktop)
      this.matchMobile(mqlMobile)
      this.matchDesktop(mqlDesktop)
      mqlMobile.addListener(this.matchMobile)
      mqlDesktop.addListener(this.matchDesktop)

      console.log(mqlMobile, mqlDesktop)
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
