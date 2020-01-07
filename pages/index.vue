<template lang="pug">
  BaseLayout
    template(v-slot:default)
      transition-group(
        appear
        tag="div"
      )
        VueToNuxtLogo(
          key="logo"
          :class="$style.logo"
        )
        Typography(
          :level="1"
          text="VueBoilerplate"
          key="title"
        )
</template>

<script>
import BaseLayout from '@/components/Template/BaseLayout.vue'
import VueToNuxtLogo from '@/components/Atom/VueToNuxtLogo/index.vue'
import Typography from '@/components/Atom/Typography/index.vue'

export default {
  name: 'PageIndex',
  components: {
    BaseLayout,
    VueToNuxtLogo,
    Typography,
  },
}
</script>

<style lang="sass" module>
.logo
  margin: 0 auto
</style>
