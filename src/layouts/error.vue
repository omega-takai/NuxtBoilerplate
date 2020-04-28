<script src="@/assets/script/layouts/error.js"></script>
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

<style module lang="scss">
.layout {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    margin: 0 auto;
    padding: {
      right: pix-to-rem(16);
      bottom: 5vh;
      left: pix-to-rem(16);
    }
  }

  .footer {
    min-height: 10vh;
  }
}
</style>
