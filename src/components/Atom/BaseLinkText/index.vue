<script src="./index.js"></script>
<template lang="pug">
  a(
    target="_blank"
    :title="text"
    :href="url"
    :class="className"
  )
    slot
    span(v-text="text")
</template>
<style lang="scss" src="./index.scss" module></style>
