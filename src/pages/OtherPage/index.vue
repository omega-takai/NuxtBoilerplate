<script src="./index.js"></script>
<style lang="scss" src="./index.scss" scoped></style>
<template lang="pug">
  BaseLayout
    template(#default)
      transition-group(
        appear
        tag="div"
        class="container"
      )
        BaseTypography(:level="1" text="OtherPage" key="title")
        ul(
          key="links"
          class="wrapper"
        )
          li(
            v-for="(val, i) in reference"
            :key="i"
          )
            BaseLinkText(
              :text="val.name"
              :url="val.path"
              class="listItem"
            )
              BaseFeatherIcon(
                iconName="FileTextIcon"
                class="icon"
              )
</template>
