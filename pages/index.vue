<template lang="pug">
  BaseLayout
    VueToNuxtLogo
    Typography(:level="1" text="VueBoilerplate")
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
