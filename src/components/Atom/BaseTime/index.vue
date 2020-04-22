<script src="./index.js"></script>
<style lang="scss" src="./index.scss" scoped></style>
<template lang="pug">
  time(
    :class="className"
    :datetime="datetime"
    v-text="text"
  )
</template>
