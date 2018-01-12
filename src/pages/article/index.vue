<template>
  <div class="main">
    <common-header :title="title"></common-header>
    <art-con></art-con>
  </div>
</template>

<script>
import CommonHeader from 'components/header'
import ArtCon from './content'
export default {
  name: 'articlePage',
  components: {
    CommonHeader,
    ArtCon
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
.main
  display: flex
  flex-direction: column
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
</style>


