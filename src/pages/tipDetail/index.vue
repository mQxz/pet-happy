<template>
  <div class="main">
    <common-header :title="title" class="header-detail"></common-header>
    <tip-detail></tip-detail>
  </div>
</template>

<script>
import CommonHeader from 'components/header'
import TipDetail from './tipDetail'
export default {
  name: 'tip-index',
  components: {
    CommonHeader,
    TipDetail
  },
  data () {
    return {
      title: '小贴士详情'
    }
  }
}
</script>

<style scoped lang="stylus">
.main
  display: flex
  flex-direction: column
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
</style>


