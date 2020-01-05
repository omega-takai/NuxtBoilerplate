<template lang="pug">
  footer(:class="$style.footer")
    dl
      div
        dt Vuex Binding
        dd {{ bindStatus }}
      div
        dt GitHub
        dd discription
      div
        dt Author
        dd
          div {{ authorName }} ({{ authorPosition }})
          div Twitter

    p © 2020 {{ authorName }}.
</template>

<script>
export default {
  name: 'BaseFooter',
  props: {
    bindStatus: {
      type: String,
      default: 'Vuex Binding',
    },
    repoUrl: {
      type: String,
      default: 'https://github.com/nuxt/nuxt.js',
    },
    authorName: {
      type: String,
      default: 'Author Name',
    },
    authorPosition: {
      type: String,
      default: 'UI Designer / Front-end Engineer',
    },
    twitterUrl: {
      type: String,
      default: 'https://twitter.com/nuxt_js',
    },
  },
}
</script>

<style lang="sass" module>
.footer
  background-color: colors('inverted')
  color: colors('white')
  font-size: TypeScale('body')
  font-weight: TypeWeight('body')
  padding: 3em 5em 1em
</style>
