<template>
  <div>
    <div class="header">
      <div class="back iconfont" @click="handleBackClick">&#xe603;</div>
      <div class="title">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'common-header',
  props: {
    title: String
  },
  methods: {
    handleBackClick () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/common/varibles.styl'
.header
  position: relative
  z-index: 1
  width: 100%
  color: #fff
  background: $bgColor
  .back
    position: absolute
    top: 0
    left: 0
    width: 1.14rem
    line-height: .88rem
    text-align: center
    font-size: .44rem
  .title
    width: 100%
    height: .88rem
    line-height: .88rem
    text-align: center
    font-size: .34rem
    
</style>


