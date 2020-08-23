<script src="@/assets/script/layouts/error.js"></script>
<style lang="scss" module src="@/assets/style/layouts/error.scss"></style>
<template lang="pug">
div(:class="$style.layout")

  main(:class="$style.main")
    BaseTypography(:level="1" :text="statusCode")
    BaseTypography(:level="2" :text="message")
    BaseNuxtLink(
      text="Back to home"
      url="/"
    )

  TheBindFooter(:class="$style.footer")
</template>
