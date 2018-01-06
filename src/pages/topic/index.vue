<template>
  <div>
    <common-header :title="title"></common-header>
    <topic-scroll></topic-scroll>
  </div>
</template>

<script>
import CommonHeader from 'components/header'
import TopicScroll from './scroll'
export default {
  name: 'topic',
  components: {
    CommonHeader,
    TopicScroll
  },
  data () {
    return {
      title: '话题'
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/styles/common/varibles.styl'
</style>


