<script src="./index.js"></script>
<template lang="pug">
  BaseLayout
    template(#default)
      transition(appear)
        BaseTypography(:level="1" text="OtherPage")
</template>
