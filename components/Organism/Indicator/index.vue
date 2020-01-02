<template lang="pug">
  SecondsIndicator(:seconds="ss")
</template>

<script>
import { mapGetters } from 'vuex'

import SecondsIndicator from '~/components/Atom/SecondsIndicator/index.vue'

export default {
  name: 'Indicator',
  components: {
    SecondsIndicator,
  },
  computed: {
    ...mapGetters(['ss']),
  },
}
</script>
