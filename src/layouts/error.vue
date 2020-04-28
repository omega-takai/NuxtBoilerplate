<template lang="pug">
  div(:class="$style.layout")

    main(:class="$style.main")
      BaseTypography(:level="1" :text="statusCode")
      BaseTypography(:level="2" :text="message")
      BaseNuxtLink(
        text="Back to home"
        url="/"
      )

    TheBindFooter(:class="$style.footer")
</template>

<script>
/**
 * DOC: https://ja.nuxtjs.org/guide/views/#エラーページ
 */
import BaseTypography from '~/components/Atom/BaseTypography/index.vue'
import TheBindFooter from '~/components/Organism/TheBindFooter/index.vue'
import BaseNuxtLink from '@/components/Atom/BaseNuxtLink/index.vue'

export default {
  name: 'Error',
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
</script>

<style module lang="scss">
.layout {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    margin: 0 auto;
    padding: {
      right: pix-to-rem(16);
      bottom: 5vh;
      left: pix-to-rem(16);
    }
  }

  .footer {
    min-height: 10vh;
  }
}
</style>
