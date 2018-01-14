<template>
  <div class="footer border-top">
    <router-link to="community" tag="div" class="footer-item community">
      <div class="iconfont footer-icon">&#xe602;</div>
      社区
    </router-link>
    <router-link to="channel" tag="div" class="footer-item channel">
      <div class="iconfont footer-icon">&#xe64f;</div>
      频道
    </router-link>
    <div class="footer-item tips">
      <div class="iconfont footer-icon">&#xe858;</div>
      小贴士
    </div>
    <router-link to="mine" tag="div" class="footer-item mine">
      <div class="iconfont footer-icon">&#xe640;</div>
      我的
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'index-footer'
  }
</script>

<style scoped lang="stylus">
  .footer
    display: flex
    justify-content: space-between
    align-items: center
    padding: 0 .3rem
    height: 1.4rem
    .footer-item
      display: flex
      flex-direction: column
      justify-content: space-between
      align-items: center
      width: 1.4rem
      height: 1rem
      .footer-icon
        font-size: .6rem
      &.router-link-active
        .footer-icon
          color: #ff9300
</style>