<template>
  <div class="page-main">
    <reg-header></reg-header>
    <div class="input-container">
      <div class="username-con input-con">
        <input type="text" class="username input" placeholder="请输入你的账号">
      </div>
      <div class="password-con input-con">
        <input type="text" class="password input" placeholder="请输入你的密码">
      </div>
      <div class="code-con input-con">
        <input type="text" class="code input" placeholder="请输入验证码">
        <button class="get-code">获取验证码</button>
      </div>
      <div class="register-submit">
        <p class="title">注册账户表示您同意《pet乐用户协议》条款</p>
        <input type="button" class="register-btn" value="注册">
      </div>
    </div>
  </div>
</template>

<script>
import RegHeader from './header'
export default {
  name: 'register',
  components: {
    RegHeader
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
        margin: .2rem auto
        .input
          flex: 1
          margin: 0 .2rem
          background: $bgColor
          font-size: .3rem
          color: #fff
        .input::placeholder
          color: #fff
      .code-con
        .get-code
          height: .64rem
          width: 1.46rem
          line-height: .64rem
          text-align: center
          font-size: .24rem
          color: $bgColor
          background: #fff
          border-radius: .1rem
          margin-right: .1rem
      .register-submit
        width: 100%
        display: flex
        flex-direction: column
        align-items: center
        margin-top: .9rem
        .title
          line-height: .66rem
          font-size: .2rem
          color: #fff
        .register-btn
          width: 5.2rem
          line-height: .8rem
          font-size: .42rem
          font-weight: 900
          color: $bgColor
          background: #fff
          border-radius: .1rem
        
</style>


