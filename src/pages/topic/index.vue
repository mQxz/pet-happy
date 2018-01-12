<template>
  <div class="main">
    <common-header :title="title"></common-header>
    <topic-scroll></topic-scroll>
  </div>
</template>

<script>
import CommonHeader from 'components/header'
import TopicScroll from './scroll'
export default {
  name: 'topicPage',
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
.main
  display: flex
  flex-direction: column
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
</style>


