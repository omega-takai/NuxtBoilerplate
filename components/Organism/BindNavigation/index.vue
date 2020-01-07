<template lang="pug">
  ul(:class="$style.wrapper")
    li(
      v-for="(val, i) in sitemap"
      :key="i"
    )
      BaseNuxtLink(
        :text="val.name"
        :url="val.path"
        :exactActiveClass="$style.isActive"
        :class="$style.listItem"
      )
        transition(appear)
          FeatherIcon(
            v-if="$route.path === val.path"
            iconName="ArrowRightIcon"
            :class="$style.icon"
          )
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
.wrapper
  display: block

  .listItem
    position: relative
    padding:
      left: 1.2em
    font-size: TypeScale('subtitle')
    font-weight: TypeWeight('subtitle')

    &.isActive
      color: colors('accent')

    .icon
      position: absolute
      left: 0
</style>
