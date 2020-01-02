<template lang="pug">
  .AuthorInfo
    Typography.title(
      :text="title"
      :level="3"
    )
    LinkButtonWithIcon(
      class="linkItem"
      v-for="(val, i) in authorData"
      :key="i"
      :iconName="val.iconName"
      :text="val.text"
      :url="val.url"
    )
</template>

<script>
import LinkButtonWithIcon from '~/components/Molecule/LinkButtonWithIcon/index.vue'
import Typography from '~/components/Atom/Typography/index.vue'

export default {
  name: 'AuthorInfo',
  components: {
    Typography,
    LinkButtonWithIcon,
  },
  props: {
    title: {
      type: String,
      default: 'Author Info',
    },
    authorData: {
      type: Array,
      default: () => [
        {
          iconName: 'TwitterIcon',
          text: 'Twitter',
          url: 'https://twitter.com/TomonariTakai',
        },
        {
          iconName: 'GithubIcon',
          text: 'GitHub',
          url: 'https://github.com/t--takai',
        },
      ],
    },
  },
}
</script>

<style lang="sass" scoped>
.AuthorInfo
  display: flex
  align-items: center
  justify-content: center
  flex-wrap: wrap

.linkItem
  margin: pix2rem(8)

.title
  flex: 1 0 100%
  color: #526488
  text-align: center
</style>
