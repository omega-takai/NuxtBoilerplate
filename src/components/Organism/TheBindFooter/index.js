import { mapState } from 'vuex'

import TheFooter from '~/components/Molecule/TheFooter/index.vue'
import TheMobileFooter from '~/components/Molecule/TheMobileFooter/index.vue'

export default {
  name: 'TheBindFooter',
  components: {
    TheFooter,
    TheMobileFooter,
  },
  computed: {
    ...mapState(['author', 'repositoryUrl']),
    ...mapState('device-type', [
      'isMobile',
      'isTablet',
      'isDesktop',
      'isLandscape',
    ]),
    statusText() {
      let orientation = 'isPortrait'
      let text = 'isMobile'
      if (this.isTablet) {
        text = 'isTablet'
      } else if (this.isDesktop) {
        text = 'isDesktop'
      }
      if (this.isLandscape) {
        orientation = 'isLandscape'
      }
      return `${text} + ${orientation}`
    },
  },
}
