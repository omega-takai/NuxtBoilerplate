import { mapState } from 'vuex'

import BaseLayout from '@/components/Template/BaseLayout/index.vue'
import BaseTypography from '~/components/Atom/BaseTypography/index.vue'
import BaseLinkText from '~/components/Atom/BaseLinkText/index.vue'

export default {
  name: 'OtherPage',
  components: {
    BaseLayout,
    BaseTypography,
    BaseLinkText,
  },
  computed: {
    ...mapState('pages', ['reference']),
  },
}
