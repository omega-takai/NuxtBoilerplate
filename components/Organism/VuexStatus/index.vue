<template lang="pug">
  Typography(:level="3" :text="satusText")
</template>

<script>
import { mapState } from 'vuex'

import Typography from '@/components/Atom/Typography/index.vue'

export default {
  name: 'VuexStatus',
  components: {
    Typography,
  },
  computed: {
    ...mapState(['isMobile', 'isTablet', 'isDesktop']),
    satusText() {
      let text = 'isMobile'
      if (this.isTablet) {
        text = 'isTablet'
      } else if (this.isDesktop) {
        text = 'isDesktop'
      }
      return 'Vuex Binding: ' + text
    },
  },
}
</script>
