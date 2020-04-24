<script src="./index.js"></script>
<style lang="scss" src="./index.scss" scoped></style>
<template lang="pug">
  BaseLinkButton(
    :url="url"
    :colorType="colorType"
    :text="text"
  )
    BaseFeatherIcon(
      :iconName="iconName"
      :iconSize="iconSize"
      class="icon"
    )
</template>
