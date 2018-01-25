<template>
  <div class="setting">
    <common-header title="设置"></common-header>
    <div class="logout-btn border-topbottom" @click="handleLogoutClick">退出登录</div>
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
    .logout-btn
      line-height: .88rem
      font-size: .32rem
      text-align: center
</style>