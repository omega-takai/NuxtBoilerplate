<script src="./index.js"></script>
<style lang="sass" src="./index.sass" module></style>
<template lang="pug">
  div(:class="$style.layout")

    main(:class="$style.main")
      slot
      BindNavigation(:class="$style.nav")

    BindFooter(:class="$style.footer")
</template>
