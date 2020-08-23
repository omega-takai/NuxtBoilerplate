<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
ul(:class="$style.wrapper")
  li(
    v-for="(val, i) in sitemap"
    :key="i"
  )
    BaseNuxtLink(
      :text="val.name"
      :url="val.path"
      :exactActiveClass="$style.isActive"
      :class="$style.listItem"
    )
      transition(appear)
        BaseFeatherIcon(
          v-if="$route.path === val.path"
          iconName="ArrowRightIcon"
          :class="$style.icon"
        )
</template>
