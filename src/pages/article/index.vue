<template>
  <div>
    <common-header :title="title"></common-header>
  </div>
</template>

<script>
import CommonHeader from 'components/header'
export default {
  name: 'topic',
  components: {
    CommonHeader
  },
  data () {
    return {
      title: '文章'
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/styles/common/varibles.styl'
</style>


