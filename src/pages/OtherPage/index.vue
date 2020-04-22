<script src="./index.js"></script>
<template lang="pug">
  BaseLayout
    template(v-slot:default)
      transition(appear)
        Typography(:level="1" text="OtherPage")
</template>
