<template>
  <div class="setting">
    <common-header title="设置"></common-header>
    <div class="setting-main">
      <div class="setting-group border-bottom">
        <div class="setting-title">账号安全</div>
        <span class="next-btn iconfont">&#xe631;</span>
      </div>
      <div class="setting-group border-bottom">
        <div class="setting-title">消息提醒</div>
        <span class="next-btn iconfont">&#xe631;</span>
      </div>
      <div class="setting-group border-bottom">
        <div class="setting-title">视频播放设置</div>
        <span class="next-btn iconfont">&#xe631;</span>
      </div>
      <div class="setting-group border-bottom">
        <div class="setting-title">黑名单</div>
        <span class="next-btn iconfont">&#xe631;</span>
      </div>
      <div class="setting-group border-bottom">
        <div class="setting-title">通用</div>
        <span class="next-btn iconfont">&#xe631;</span>
      </div>
      <div class="setting-group border-bottom">
        <div class="setting-title">检测新版本</div>
        <span class="version">当前版本2.1.0</span>
        <span class="next-btn iconfont">&#xe631;</span>
      </div>
      <div class="setting-group border-bottom">
        <div class="setting-title">清理缓存</div>
        <span class="next-btn iconfont">&#xe631;</span>
      </div>
      <div class="setting-group border-bottom">
        <div class="setting-title">关于Pet乐</div>
        <span class="next-btn iconfont">&#xe631;</span>
      </div>
      <div class="logout-btn" @click="handleLogoutClick">退出登录</div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from 'components/header'
  export default {
    name: 'setting',
    components: {
      CommonHeader
    },
    methods: {
      handleLogoutClick () {
        try {
          window.localStorage.userId && window.localStorage.clear()
          this.$router.push('/login')
        } catch (e) {}
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../../assets/styles/common/varibles.styl'
  .setting
    display: flex
    flex-direction: column
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    .setting-main
      .setting-group
        position: relative
        padding: 0 .1rem 0 .4rem
        display: flex
        justify-content: space-between
        align-items: center
        line-height: .98rem
        color: .28rem
        .next-btn
          font-size: .5rem
          color: #ccc
        .version
          position: absolute
          top: 50%
          transform: translateY(-50%)
          right: .6rem
          color: #999
      .logout-btn
        margin: .55rem auto 0
        width: 6rem
        line-height: .9rem
        font-size: .32rem
        text-align: center
        font-size: .36rem
        color: #fff
        background: $bgColor
        border-radius: .1rem
</style>