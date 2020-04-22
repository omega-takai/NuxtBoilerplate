<script src="./index.js"></script>
<style lang="sass" module src="./index.sass"></style>
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
          text="NuxtBoilerplate"
          key="title"
        )
</template>
