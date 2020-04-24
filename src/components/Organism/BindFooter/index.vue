<script src="./index.js"></script>
<template lang="pug">
  TheFooter(
    :isMobile="isMobile"
    :bindStatus="statusText"
    :repoUrl="repositoryUrl"
    :authorName="author.name"
    :authorPosition="author.position"
    :twitterUrl="author.twitterUrl"
  )
</template>
