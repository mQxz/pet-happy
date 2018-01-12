<template>
  <div class="page-main">

    <div class="check-notice" v-show="loginNotice">
      <span class="iconfont notice-icon">&#xe60e;</span>
      <p>用户名或密码错误</p>
    </div>

    <div class="header">
      <div class="close iconfont">&#xe600;</div>
    </div>

    <div class="logo-container">
      <div class="logo-img-con">
        <img src="../../assets/styles/img/logox2.png" alt="logo" class="logo-img">
      </div>
    </div>

    <div class="input-container">
      <div class="username-con input-con">
        <i class="iconfont input-icon">&#xe601;</i>
        <input type="text" class="username input" placeholder="请输入你的账号" v-model="username">
      </div>
      <div class="password-con input-con">
        <i class="iconfont input-icon">&#xe6a1;</i>
        <input type="text" class="password input" placeholder="请输入你的密码" v-model="password">
      </div>
      <div class="forget-pass">
        <span class="forget-txt">忘记密码?</span>
      </div>
      <input type="button" class="submit-btn" value="登录" @click="handleLogin">
    </div>

    <div class="third-container">
      <div class="title-con">
        <span class="third-title">使用第三方账号登录</span>
      </div>
      <div class="third-icon">
        <div class="iconfont">&#xe701;</div>
        <div class="iconfont">&#xe60a;</div>
        <div class="iconfont">&#xe6b1;</div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'login',
    data () {
      return {
        loginNotice: false,
        username: '',
        password: ''
      }
    },
    methods: {
      handleLogin () {
        axios.get('api/login.json')
          .then(this.handleLoginSucc.bind(this))
          .catch(this.handleLoginErr.bind(this))
      },
      handleLoginSucc (res) {
        res && (res = res.data)
        if (res.msgCode === '1') {
          console.log('succ')
        } else if (res.msgCode === '2') {
          this.loginNotice = true
          setTimeout(() => {
            this.loginNotice = false
          }, 2000)
        }
      },
      handleLoginErr () {
        console.log('服务器内部错误')
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles.styl'
  .page-main
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: $bgColor
    .check-notice
      z-index: 2
      position: absolute
      width: 3rem
      height: 2.5rem
      top: 50%
      left: 50%
      line-height: 1.2rem
      text-align: center
      transform: translate(-50%, -50%)
      font-size: .3rem
      color: #fff
      border-radius: .2rem
      background: rgba(0, 0, 0, .6)
      .notice-icon
        font-size: .7rem
    .header
      height: .88rem
      line-height: .88rem
      .close
        width: 1.44rem
        line-height: .88rem
        text-align: center
        font-size: .4rem
        color: #fff
    .logo-container
      width: 100%
      height: 3.4rem
      .logo-img-con
        overflow: hidden
        width: 3.4rem
        height: 0
        margin: 0 auto
        padding-bottom: 100%
        .logo-img
          width: 100%
    .input-container
      height: 4.1rem
      margin-bottom: .8rem
      .input-con
        display: flex
        align-items: center
        margin: 0 auto
        width: 5.2rem
        height: .8rem
        border: .03rem solid #fff
        border-radius: .15rem
        .input-icon
          width: .8rem
          line-height: .8rem
          text-align: center
          font-size: .6rem
          color: #fff
        .input
          flex: 1
          margin: 0 .2rem
          background: $bgColor
          font-size: .3rem
          color: #fff
        .input::placeholder
          color: #fff
      .username-con
        margin: .2rem auto
      .forget-pass
        margin: .2rem auto .7rem
        width: 5.2rem
        line-height: .22rem
        text-align: right
        font-size: .22rem
        color: #fff
      .submit-btn
        display: block
        margin: 0 auto
        width: 5.2rem
        line-height: .8rem
        font-size: .42rem
        font-weight: 900
        color: $bgColor
        background: #fff
        border-radius: .15rem
    .third-container
      .title-con
        position: relative
        margin: 0 auto
        width: 5.2rem
        height: .02rem
        background: #fff
        .third-title
          display: inline-block
          position: absolute
          left: 50%
          top: -0.07rem
          transform: translateX(-50%)
          padding: 0 .1rem
          font-size: .24rem
          background: $bgColor
          color: #fff
      .third-icon
        display: flex
        justify-content: space-between
        margin: 1rem auto 0
        width: 5.2rem
        color: #fff
        .iconfont
          font-size: .9rem
</style>