<template lang="pug">
  p.digitalClock
    BaseTime(
      :text="date"
      :isTime="false"
    )
    BaseTime(
      :text="time"
      :isTime="true"
    )
</template>

<script>
import { mapGetters } from 'vuex'

import BaseTime from '~/components/Atom/BaseTime/index.vue'

export default {
  name: 'DigitalClock',
  components: {
    BaseTime,
  },
  computed: {
    ...mapGetters(['YYYY', 'MM', 'DD', 'hh', 'mm']),
    time() {
      return `${this.hh}:${this.mm}`
    },
    date() {
      return `${this.YYYY}/${this.MM}/${this.DD}`
    },
  },
}
</script>

<style lang="sass" scoped>
.digitalClock
  padding-bottom: TypeScale('h4')
  text-align: center
</style>
