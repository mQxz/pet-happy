<template>
<div class="main">
  <div class="error">
    <span class="iconfont notice-icon">&#xe60e;</span>
    <p class="error-msg">请检查您的网络设置</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'errorMsg'
}
</script>

<style scoped lang="stylus">
.main
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 2
  .error
    z-index: 2
    position: absolute
    top: 50%
    left: 50%
    text-align: center
    padding: .2rem
    transform: translate(-50%, -50%)
    font-size: .3rem
    color: #fff
    border-radius: .2rem
    background: rgba(0, 0, 0, .6)
    .notice-icon
      font-size: .7rem
    .error-msg
      line-height: .5rem
</style>


