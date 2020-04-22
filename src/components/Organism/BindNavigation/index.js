import { mapState } from 'vuex'

import BaseNuxtLink from '@/components/Atom/BaseNuxtLink/index.vue'
import FeatherIcon from '@/components/Atom/FeatherIcon/index.vue'

export default {
  name: 'BindNavigation',
  components: {
    BaseNuxtLink,
    FeatherIcon,
  },
  computed: {
    ...mapState(['isMobile', 'isTablet', 'isDesktop', 'sitemap']),
  },
}
