<template lang="pug">
  ul(:class="$style.wrapper")
    li(
      v-for="(val, i) in sitemap"
      :key="i"
      :class="$style.listItem"
    )
      BaseNuxtLink(
        :text="val.name"
        :url="val.path"
        :exactActiveClass="$style.isActive"
      )
        FeatherIcon(iconName="ArrowRightIcon")
</template>

<script>
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
</script>

<style lang="sass" module>
.isActive
  color: red

.wrapper
  list-style: none
  padding: 0
</style>
