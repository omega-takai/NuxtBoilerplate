<template lang="pug">
  div(:class="$style.layout")

    main(:class="$style.main")
      slot
      BindNavigation(:class="$style.nav")

    BindFooter(:class="$style.footer")
</template>

<script>
import BindNavigation from '@/components/Organism/BindNavigation/index.vue'
import BindFooter from '@/components/Organism/BindFooter/index.vue'

export default {
  name: 'BaseLayout',
  components: {
    BindNavigation,
    BindFooter,
  },
}
</script>

<style lang="sass" src="./index.sass" module />
