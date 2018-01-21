<template>
  <div class="main">
    <common-header :title="title"></common-header>
    <art-detail></art-detail>
  </div>
</template>

<script>
import CommonHeader from 'components/header'
import ArtDetail from './artdetail'
export default {
  name: 'detail',
  components: {
    CommonHeader,
    ArtDetail
  },
  data () {
    return {
      title: '文章详情'
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


