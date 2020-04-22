<script src="./index.js"></script>
<style lang="sass" src="./index.sass" scoped></style>
<template lang="pug">
  time(
    :class="className"
    :datetime="datetime"
    v-text="text"
  )
</template>
