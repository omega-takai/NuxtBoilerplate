<script src="./index.js"></script>
<template lang="pug">
  TheFooter(
    v-if="isMobile"
    :bindStatus="statusText"
    :repoUrl="repositoryUrl"
    :authorName="author.name"
    :authorPosition="author.position"
    :twitterUrl="author.twitterUrl"
  )
  TheMobileFooter(
    v-else
    :bindStatus="statusText"
    :repoUrl="repositoryUrl"
    :authorName="author.name"
    :authorPosition="author.position"
    :twitterUrl="author.twitterUrl"
  )
</template>
