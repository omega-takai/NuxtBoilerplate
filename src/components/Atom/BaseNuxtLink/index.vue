<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
NuxtLink(
  :to="url"
  :class="className"
  :exactActiveClass="exactActiveClass"
)
  slot
  span(v-text="text")
</template>
