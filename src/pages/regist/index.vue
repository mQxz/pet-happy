<template>
  <div class="page-main">
    <reg-header></reg-header>
    <div class="input-container">
      <div class="username-con input-con">
        <input type="text"
         class="username input"
         placeholder="请输入您的手机号"
         maxlength="11"
         ref="username"
         @blur="handlePhoneBlur">
      </div>
      <div class="nickname-con input-con">
        <input type="text"
         class="nickname input"
         placeholder="请输入您的昵称"
         maxlength="12"
         ref="nickname"
         @blur="handleNicknameBlur">
      </div>
      <div class="password-con input-con">
        <input type="text"
         class="password input"
         placeholder="请输入您的密码"
         maxlength="12"
         ref="password"
         @blur="handlePwdBlur">
      </div>
      <div class="code-con input-con">
        <input type="text" 
        class="code input" 
        maxlength="6"
        placeholder="请输入验证码"
        ref="code"
        @blur="handleCodeBlur">
        <button class="get-code" @click="handleGetCodeClick">获取验证码</button>
      </div>
      <div class="error" v-show="error">
        <span class="iconfont notice-icon">&#xe60e;</span>
        <p class="error-msg" ref="error">错误提示</p>
      </div>
      <div class="register-submit">
        <p class="title">注册账户表示您同意《pet乐用户协议》条款</p>
        <input type="button"
         class="register-btn" 
         value="注册"
         @click="handleRegClick">
      </div>
    </div>
  </div>
</template>

<script>
import RegHeader from './header'
import axios from 'axios'
export default {
  name: 'register',
  components: {
    RegHeader
  },
  data () {
    return {
      error: false,
      username: false,
      password: false,
      authCode: false,
      nickName: false
    }
  },
  methods: {
    handlePhoneBlur () {
      var username = this.$refs.username.value
      const reg = /^(13|15|18|17|14)\d{9}$/g
      if (reg.test(username)) {
        this.username = username
        this.error = false
      } else {
        this.handleErrorMsg('您输入的手机号格式有误')
      }
    },

    handlePwdBlur () {
      var password = this.$refs.password.value
      const regPwd = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{6,12}$/
      if (regPwd.test(password)) {
        this.password = password
        this.error = false
      } else {
        this.handleErrorMsg('密码为6-12位字母、数字和字符两两组合')
      }
    },

    handleGetCodeClick () {
      var params = new URLSearchParams()
      params.append('username', this.username)
      axios.post('/api/user/send.action', params, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
        .then(this.handleGetCodeSucc.bind(this))
        .catch(this.handleGetCodeErr.bind(this))
    },
    handleGetCodeSucc (res) {
      this.handleErrorMsg('验证码已发送')
    },
    handleGetCodeErr () {
      this.handleErrorMsg('系统繁忙，请稍后重试')
    },
    handleCodeBlur () {
      var authCode = this.$refs.code.value
      const regCode = /^[0-9]{6}$/g
      if (regCode.test(authCode)) {
        this.authCode = authCode
      } else {
        this.handleErrorMsg('请输入正确验证码')
      }
    },
    handleNicknameBlur () {
      var nickName = this.$refs.nickname.value
      if (nickName === '') {
        this.handleErrorMsg('昵称不能为空')
      } else {
        this.nickName = nickName
      }
    },
    handleRegClick () {
      if (this.username && this.password && this.authCode && this.nickName) {
        this.error = false
        var params = new URLSearchParams()
        params.append('username', this.username)
        params.append('password', this.password)
        params.append('nickname', this.nickName)
        params.append('authCode', this.authCode)
        axios.post('/api/user/regist.json', params, {
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        })
        .then(this.handleRegSucc.bind(this))
        .catch(this.handleRegErr.bind(this))
      } else {
        this.handleErrorMsg('请将信息填写完整')
      }
    },
    handleRegSucc (res) {
      res = res ? res = res.data : null
      if (res.msgCode === 1) {
        this.handleErrorMsg('注册成功')
        setTimeout(() => {
          this.$router.push('/')
        }, 2000)
      } else if (res.msgCode === 2) {
        this.handleErrorMsg('手机号已被注册')
      } else if (res.msgCode === 3) {
        this.handleErrorMsg('您的昵称被人捷足先登')
      } else if (res.msgCode === 0) {
        this.handleErrorMsg('验证码错误')
      } else {
        this.handleRegErr()
      }
    },
    handleRegErr () {
      this.handleErrorMsg('系统繁忙，请稍后重试')
    },
    handleErrorMsg (msg) {
      this.error = true
      this.$refs.error.innerHTML = msg
      setTimeout(() => {
        this.error = false
      }, 2000)
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


