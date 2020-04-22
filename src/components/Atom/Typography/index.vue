<script src="./index.js"></script>
<style lang="sass" src="./index.sass" scoped></style>
<template lang="pug">
  component(
    :is="tagName"
    :class="tagName"
    v-text="text"
  )
</template>
