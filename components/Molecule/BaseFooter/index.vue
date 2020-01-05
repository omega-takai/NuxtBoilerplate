<template lang="pug">
  footer(:class="$style.footer")
    dl
      div(:class="rowClassName")
        dt Vuex Binding
        dd {{ bindStatus }}
      div(:class="rowClassName")
        dt GitHub
        dd
          LinkTextWithIcon(
            iconName="GithubIcon"
            colorType="white"
            :text="repoName"
            :url="repoUrl"
          )
      div(:class="rowClassName")
        dt Author
        dd
          div {{ authorName }} ({{ authorPosition }})
          LinkTextWithIcon(
            iconName="TwitterIcon"
            colorType="white"
            :text="twitterName"
            :url="twitterUrl"
          )

    div(:class="$style.copy") © 2020 {{ authorName }}.
</template>

<script>
import LinkTextWithIcon from '@/components/Molecule/LinkTextWithIcon/index.vue'

export default {
  name: 'BaseFooter',
  components: {
    LinkTextWithIcon,
  },
  props: {
    isMobile: {
      type: Boolean,
      default: true,
    },
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
    rowClassName() {
      return this.isMobile ? this.$style.rowMobile : this.$style.row
    },
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

@mixin _row()
  display: flex
  align-items: flex-start
  justify-content: flex-start
  min-height: 2em

.row
  @include _row()
  &:not(:first-of-type)
    margin-top: pix2rem(4)

  > dt
    flex: 0 0 8em

  > dd
    flex: 1 1 100%

.rowMobile
  @include _row()
  flex-wrap: wrap
  &:not(:first-of-type)
    margin-top: pix2rem(8)

  > dt
    flex: 1 1 100%
</style>
