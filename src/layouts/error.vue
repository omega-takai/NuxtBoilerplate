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
// TODO: LayoutsErrorでも関心の分離をする
// src="@/assets/script/layouts/error.js"
/**
 * DOC: https://ja.nuxtjs.org/guide/views/#エラーページ
 */
import BaseNuxtLink from '@/components/Atom/BaseNuxtLink/index.vue'
import BaseTypography from '~/components/Atom/BaseTypography/index.vue'
import TheBindFooter from '~/components/Organism/TheBindFooter/index.vue'

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
  head() {
    return {
      title: this.message,
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || '<%= messages.client_error %>'
    },
  },
}
</script>
<style lang="scss" module src="@/assets/style/layouts/error.scss"></style>
