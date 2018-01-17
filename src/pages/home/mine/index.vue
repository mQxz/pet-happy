<template>
  <div class="mine">
    <div class="header">我的</div>
    <div class="main">
      <div class="user border-bottom">
        <div class="user-box" v-show="isLogin">
          <div class="userinfo">
            <div class="user-icon">
              <img src="http://p1.ycw.com/other/201708/01/e785d32002affe6be615942962882848_s60" class="user-img">
            </div>
            <div class="user-detail">
              <p class="nickname">喝饮料爱咬吸管的少女</p>
              <p class="account">账号：<span class="account-num">13552418897</span></p>
            </div>
          </div>
          <div class="person">
            个人资料<span class="topage iconfont">&#xe631;</span>
          </div>
        </div>
        <div class="login-res" v-show="!isLogin">
          <router-link to="login" tag="div" class="login btn">登录</router-link>
          <router-link to="register" tag="div" class="register btn">注册</router-link>
        </div>
      </div>
      <div class="set-con border-bottom">
        <div class="set-item message border-right">
          <img src="../../../assets/styles/img/mine-img/message.png" class="set-img">
          消息
        </div>
        <div class="set-item setting">
          <img src="../../../assets/styles/img/mine-img/mine.png" class="set-img">
          设置
        </div>
      </div>
      <div class="manage-con border-bottom">
        <p class="title">日常管理</p>
        <div class="icons-con">
          <div class="icons-item">
            <img class="icons-img" src="../../../assets/styles/img/mine-img/pet.png">
            宠物
          </div>
          <div class="icons-item">
            <img class="icons-img" src="../../../assets/styles/img/mine-img/friend.png">
            宠友
          </div>
          <div class="icons-item">
            <img class="icons-img" src="../../../assets/styles/img/mine-img/community.png">
            社区
          </div>
          <div class="icons-item">
            <img class="icons-img" src="../../../assets/styles/img/mine-img/collect.png">
            收藏
          </div>
        </div>
      </div>
    </div>
    <index-footer :routerName="routerName"></index-footer>
  </div>
</template>

<script>
  import IndexFooter from '../common/footer'
  export default {
    name: 'index',
    data () {
      return {
        isLogin: false,
        routerName: ''
      }
    },
    components: {
      IndexFooter
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {
        vm.routerName = to.name
      })
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../../assets/styles/common/varibles.styl'
  .mine
    display: flex
    flex-direction: column
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    .header
      height: .88rem
      line-height: .88rem
      font-size: .34rem
      text-align: center
      background: $bgColor
      color: #fff
    .main
      flex: 1
      .user
        .user-box
          display: flex
          justify-content: space-between
          align-items: center
          padding: .4rem .2rem
          .userinfo
            display: flex
            justify-content: space-between
            .user-icon
              overflow: hidden
              width: 1.3rem
              height: 0
              padding-bottom: 1.3rem
              border-radius: .65rem
              .user-img
                width: 100%
            .user-detail
              display: flex
              flex-direction: column
              justify-content: space-between
              padding: .2rem
              .nickname
                font-size: .28rem
              .account
                color: #666
          .person
            color: #666
        .login-res
          overflow: hidden
          display: flex
          justify-content: space-around
          align-items: center
          height: 1.3rem  
          .btn
            width: 1.5rem
            line-height: .5rem
            text-align: center
            font-size: .3rem
            border: .02rem solid #ff9300
            border-radius: .5rem
    .set-con
      display: flex
      height: .78rem
      padding: .2rem
      .set-item
        flex: 1
        line-height: .78rem
        .set-img
          padding-right: .25rem
          width: .4rem
          height: .4rem
      .message
        padding-right: .6rem
        text-align: right
      .setting
        padding-left: .6rem
        text-align: left
    .manage-con
      height: 2.16rem
      padding: 0 .2rem
      .title
        padding-top: .15rem
        font-size: .28rem
        font-weight: bold
      .icons-con
        display: flex
        justify-content: space-around
        padding-top: .4rem
        .icons-item
          display: flex
          flex-direction: column
          justify-content: space-between
          height: .9rem
          .icons-img
            width: .5rem
            height: .45rem
</style>