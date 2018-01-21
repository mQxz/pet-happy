<template>
  <div class="header">
    <div class="back iconfont" @click="handleBackClick">&#xe603;</div>
    <div class="title">发帖子</div>
    <div class="publish-btn" @click="handlePublishClick">发布</div>
  </div>
</template>

<script>
export default {
  name: 'index-header',
  methods: {
    handleBackClick () {
      this.$router.go(-1)
    },
    handlePublishClick () {
      this.$emit('publish')
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles.styl'
  .header
    display: flex
    justify-content: space-between
    padding: 0 .2rem
    color: #fff
    background: $bgColor
    .back
      line-height: .88rem
      font-size: .44rem
    .title
      line-height: .88rem
      font-size: .34rem
    .publish-btn
      line-height: .88rem
</style>