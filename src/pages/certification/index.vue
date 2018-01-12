<template>
  <div class="main">
    <common-header :title="title"></common-header>
    <cert-con></cert-con>
  </div>
</template>

<script>
import CommonHeader from 'components/header'
import CertCon from './content'
export default {
  name: 'cert',
  components: {
    CommonHeader,
    CertCon
  },
  data () {
    return {
      title: '认证号'
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


