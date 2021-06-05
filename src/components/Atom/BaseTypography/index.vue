<script src="./index.js"></script>
<template lang="pug">
  component(
    :is="tagName"
    :class="$style[tagName]"
    v-text="text"
  )
</template>
<style lang="scss" src="./index.scss" module></style>
