<template>
  <div class="publish">
    <div class="check-notice" v-show="loginNotice">
      <span class="iconfont notice-icon">&#xe60e;</span>
      <p>{{noticeText}}</p>
    </div>
    <index-header @publish="handlePublishClick"></index-header>
    <div class="content border-bottom">
      <textarea class="user-text" @input="handleTextareaChange" ref="textarea" maxlength="80"></textarea>
      <div class="img-container">
        <div class="img-upload-con" v-for="(item, index) of imgBase64" :key="index">
          <img :src="item" class="user-img img-item" />
          <img src="../../assets/styles/img/delete.png" @click="handleImgDelete(index)" class="delete-btn"/>
        </div>
        <div class="input-container img-item">
          <span class="iconfont plus">&#xe6f3;</span>
          <input type="file" @change="handleImgInput" class="image-input" />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-title">选择标签</div>
      <span class="footer-item" @click="handleClickLabel">今天他长这样</span>
      <span class="footer-item" @click="handleClickLabel">封面萌宠</span>
      <span class="footer-item" @click="handleClickLabel">小宠恩爱</span>
      <span class="footer-item" @click="handleClickLabel">精品美图</span>
      <span class="footer-item" @click="handleClickLabel">喵爱我</span>
      <span class="footer-item" @click="handleClickLabel">极品二哈</span>
      <span class="footer-item" @click="handleClickLabel">养一只蠢萌是多么的幸福</span>
      <span class="footer-item" @click="handleClickLabel">今天好帅</span>
    </div>
  </div>
</template>

<script>
  import IndexHeader from './header'
  import axios from 'axios'
  export default {
    name: 'publish',
    components: {
      IndexHeader
    },
    data () {
      return {
        value: '',
        files: [],
        imgUrl: '',
        imgBase64: [],
        labelValue: '',
        noticeText: '',
        loginNotice: false
      }
    },
    methods: {
      handlePublishClick () {
        if (!this.value) {
          console.log('请输入内容')
        } else {
          const formData = new FormData()
          formData.append('lightTitle', this.labelValue)
          formData.append('title', this.value)
          this.files.forEach((item, index) => {
            formData.append('images', this.files[index])
          })
          console.log(formData)
          // const params = new URLSearchParams()
          // params.append('formData', formData)
          axios.post('/api/user/publish.do', formData, {
            headers: {
              'X-Requested-With': 'XMLHttpRequest'
            }
          })
            .then(this.handlePublishSucc.bind(this))
            .catch(this.handlePublishErr.bind(this))
        }
      },
      handleTextareaChange (e) {
        this.value = e.target.value.replace(this.labelValue, '')
        let length = this.value.replace(/[^\x00-\xff]/g, '**').length
        if (length > 60) {
          this.loginNotice = true
          this.noticeText = '最多输入40字符'
          setTimeout(() => {
            this.loginNotice = false
          }, 2000)
        }
      },
      handleImgInput (e) {
        if (this.files.length > 4) {
          this.loginNotice = true
          this.noticeText = '最多添加五张图片'
          setTimeout(() => {
            this.loginNotice = false
          }, 2000)
          return
        } else if (e.target.files[0].size > 1024 * 1024 * 3) {
          this.loginNotice = true
          this.noticeText = '图片最大3M'
          setTimeout(() => {
            this.loginNotice = false
          }, 2000)
          return
        }
        this.files.push(e.target.files[0])
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = (e) => {
          this.imgBase64.push(e.target.result)
        }
      },
      handlePublishSucc (res) {
        res && (res = res.data)
        if (res.msgCode === 1) {
          this.$router.push('/channel')
        }
      },
      handlePublishErr () {
        this.loginNotice = true
        this.noticeText = '服务器开小差了！！！'
        setTimeout(() => {
          this.loginNotice = false
        }, 2000)
      },
      handleImgDelete (index) {
        this.files.splice(index, 1)
        this.imgBase64.splice(index, 1)
      },
      handleClickLabel (e) {
        e.target.style.color = '#ff7c7c'
        this.labelValue = e.target.innerHTML
        this.$refs.textarea.innerHTML = '#' + this.labelValue + '#'
      }
    }
  }
</script>

<style scoped lang="stylus">
  .publish
    width: 100%
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
    .content
      posotion: relative
      padding: 0 .2rem
      .user-text
        box-sizing: border-box
        padding: .1rem 0
        line-height: 1.3
        width: 100%
        height: 3.77rem
        font-size: .34rem
        resize: none
      .img-container
        padding: .2rem 0
        .img-upload-con
          position: relative
          display: inline-block
          height: 1.45rem
          width: 1.45rem
          margin-right: .1rem
          .user-img
            width: 100%
            height: 100%
            border-radius: .1rem
          .delete-btn
            position: absolute
            height: .3rem
            width: .3rem
            right: 0
            bottom: 0
        .input-container
          position: relative
          display: inline-block
          width: 1.45rem
          height: 1.45rem
          .image-input
            height: 100%
            width: 100%
            z-index: 99999;
            opacity: 0;
          .plus
            position: absolute
            display: block
            top: 0
            left: 0
            width: 1.44rem
            line-height: 1.44rem
            font-size: 1rem
            text-align: center
            color: #ccc
            border: .02rem dashed #ccc
            border-radius: .1rem
    .footer
      overflow: hidden
      color: #999
      padding: 0 .2rem
      .footer-title
        padding: .2rem
        font-size: .28rem
      .footer-item
        display: block
        overflow: hidden
        float: left
        margin: 0 .1rem .2rem
        padding: 0 .2rem
        line-height: .5rem
        text-align: center
        font-size: .26rem
        border: .02rem solid #999
        border-radius: .1rem
</style>