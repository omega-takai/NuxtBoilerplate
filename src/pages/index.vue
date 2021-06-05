<script src="./index.js"></script>
<template lang="pug">
  BaseLayout
    template(#default)
      transition-group(
        appear
        tag="div"
      )
        TheNuxtLogo(
          key="logo"
          :class="$style.logo"
        )
        BaseTypography(
          :level="1"
          text="NuxtBoilerplate"
          key="title"
        )
</template>
<style lang="scss" module src="./index.scss"></style>
