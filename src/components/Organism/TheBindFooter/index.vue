<script src="./index.js"></script>
<template lang="pug">
TheMobileFooter(
  v-if="isMobile"
  :bindStatus="statusText"
  :repoUrl="repositoryUrl"
  :authorName="author.name"
  :authorPosition="author.position"
  :twitterUrl="author.twitterUrl"
)
TheFooter(
  v-else
  :bindStatus="statusText"
  :repoUrl="repositoryUrl"
  :authorName="author.name"
  :authorPosition="author.position"
  :twitterUrl="author.twitterUrl"
)
</template>
