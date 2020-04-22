<script src="./index.js"></script>
<style lang="scss" src="./index.scss" scoped></style>
<template lang="pug">
  component(
    :is="tagName"
    :class="tagName"
    v-text="text"
  )
</template>
