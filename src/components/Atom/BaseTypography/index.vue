<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
component(
  :is="tagName"
  :class="$style[tagName]"
  v-text="text"
)
</template>
