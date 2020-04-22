<script src="./index.js"></script>
<style lang="sass" src="./index.sass" module></style>
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
