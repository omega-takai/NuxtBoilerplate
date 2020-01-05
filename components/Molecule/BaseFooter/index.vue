<template lang="pug">
  footer(:class="$style.footer")
    dl
      div
        dt Vuex Binding
        dd {{ bindStatus }}
      div
        dt GitHub
        dd
          LinkTextWithIcon(
            iconName="GithubIcon"
            colorType="white"
            :text="repoName"
            :url="repoUrl"
          )
      div
        dt Author
        dd
          div {{ authorName }} ({{ authorPosition }})
          LinkTextWithIcon(
            iconName="TwitterIcon"
            colorType="white"
            :text="twitterName"
            :url="twitterUrl"
          )

    p(:class="$style.copy") © 2020 {{ authorName }}.
</template>

<script>
import LinkTextWithIcon from '@/components/Molecule/LinkTextWithIcon/index.vue'

export default {
  name: 'BaseFooter',
  components: {
    LinkTextWithIcon,
  },
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
  computed: {
    repoName() {
      const arr = this.repoUrl.split('/')
      const lastOne = arr.length - 1
      return arr[lastOne]
    },
    twitterName() {
      const arr = this.twitterUrl.split('/')
      const lastOne = arr.length - 1
      return '@' + arr[lastOne]
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

.copy
  margin-top: TypeScale('body')
  border-top: 1px solid colors('whiteAlpha')
  padding: TypeScale('body') 0
  text-align: center
  font-size: TypeScale('caption')
  font-weight: TypeWeight('caption')
</style>
