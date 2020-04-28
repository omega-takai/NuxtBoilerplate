/**
 * DOC: https://ja.nuxtjs.org/guide/views/#エラーページ
 */
import BaseTypography from '~/components/Atom/BaseTypography/index.vue'
import TheBindFooter from '~/components/Organism/TheBindFooter/index.vue'
import BaseNuxtLink from '@/components/Atom/BaseNuxtLink/index.vue'

export default {
  name: 'LayoutsError',
  components: {
    BaseTypography,
    TheBindFooter,
    BaseNuxtLink,
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || '<%= messages.client_error %>'
    },
  },
  head() {
    return {
      title: this.message,
    }
  },
}
