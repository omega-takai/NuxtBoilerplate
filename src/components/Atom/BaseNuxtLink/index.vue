<script src="./index.js"></script>
<style lang="sass" src="./index.sass" module></style>
<template lang="pug">
  NuxtLink(
    :to="url"
    :class="className"
    :exactActiveClass="exactActiveClass"
  )
    slot
    span(v-text="text")
</template>
