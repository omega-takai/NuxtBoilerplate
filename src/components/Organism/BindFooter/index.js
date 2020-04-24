import { mapState } from 'vuex'

import TheFooter from '~/components/Molecule/TheFooter/index.vue'
import TheMobileFooter from '~/components/Molecule/TheMobileFooter/index.vue'

export default {
  name: 'BindFooter',
  components: {
    TheFooter,
    TheMobileFooter,
  },
  computed: {
    ...mapState([
      'isMobile',
      'isTablet',
      'isDesktop',
      'author',
      'repositoryUrl',
    ]),
    statusText() {
      let text = 'isMobile'
      if (this.isTablet) {
        text = 'isTablet'
      } else if (this.isDesktop) {
        text = 'isDesktop'
      }
      return text
    },
  },
}
