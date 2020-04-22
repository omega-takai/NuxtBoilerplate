<script src="./index.js"></script>
<style lang="sass" src="./index.sass" scoped></style>
<template lang="pug">
  BaseLinkText(
    :url="url"
    :colorType="colorType"
    :text="text"
  )
    FeatherIcon(
      :iconName="iconName"
      :iconSize="iconSize"
      class="icon"
    )
</template>
