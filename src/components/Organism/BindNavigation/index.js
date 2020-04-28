import { mapState } from 'vuex'

import BaseNuxtLink from '@/components/Atom/BaseNuxtLink/index.vue'
import BaseFeatherIcon from '@/components/Atom/BaseFeatherIcon/index.vue'

export default {
  name: 'BindNavigation',
  components: {
    BaseNuxtLink,
    BaseFeatherIcon,
  },
  computed: {
    ...mapState('device-type', ['isMobile', 'isTablet', 'isDesktop']),
    ...mapState('pages', ['sitemap']),
  },
}
