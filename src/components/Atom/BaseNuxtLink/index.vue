<script src="./index.js"></script>
<template lang="pug">
  NuxtLink(
    :to="url"
    :class="className"
    :exactActiveClass="exactActiveClass"
  )
    slot
    span(v-text="text")
</template>
<style lang="scss" src="./index.scss" module></style>
