<template>
  <div class="main">
    <common-header :title="title"></common-header>
    <special-con></special-con>
  </div>
</template>

<script>
import CommonHeader from 'components/header'
import SpecialCon from './content'
export default {
  name: 'specialPage',
  components: {
    CommonHeader,
    SpecialCon
  },
  data () {
    return {
      title: '专题'
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


