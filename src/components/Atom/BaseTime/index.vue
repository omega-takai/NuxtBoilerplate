<template lang="pug">
  time(
    :class="className"
    :datetime="datetime"
    v-text="text"
  )
</template>

<script>
export default {
  name: 'BaseTime',
  props: {
    text: {
      type: String,
      require: true,
      default: '2020/12/24',
    },
    isTime: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      regex: /\//g,
    }
  },
  computed: {
    className() {
      return this.isTime ? 'time' : 'date'
    },
    datetime() {
      if (this.isTime) {
        // 08:45
        return this.text
      } else {
        // 2020-12-24
        return this.text.replace(this.regex, '-')
      }
    },
  },
}
</script>

<style lang="sass" src="./index.sass" scoped />
