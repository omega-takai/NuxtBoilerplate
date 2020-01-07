<template lang="pug">
  BaseLayout
    template(v-slot:default)
      transition(appear)
        Typography(:level="1" text="OtherPage")
</template>

<script>
import BaseLayout from '@/components/Template/BaseLayout.vue'
import Typography from '@/components/Atom/Typography/index.vue'

export default {
  name: 'OtherPage',
  components: {
    BaseLayout,
    Typography,
  },
}
</script>
