<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
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
