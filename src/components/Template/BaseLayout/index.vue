<script src="./index.js"></script>
<template lang="pug">
  div(:class="$style.layout")

    main(:class="$style.main")
      slot
      BindNavigation(:class="$style.nav")

    TheBindFooter(:class="$style.footer")
</template>
<style lang="scss" src="./index.scss" module></style>
