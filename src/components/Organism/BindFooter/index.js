import { mapState } from 'vuex'

import BaseFooter from '@/components/Molecule/BaseFooter/index.vue'

export default {
  name: 'BindFooter',
  components: {
    BaseFooter,
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
