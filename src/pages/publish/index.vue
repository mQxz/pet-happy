<template>
  <div class="publish">
    <index-header @publish="handlePublishClick"></index-header>
    <div class="content border-bottom">
      <textarea class="user-text" autofocus="true" @input="handleTextareaChange"></textarea>
      <div class="img-container">
        <img :src="item" class="user-img img-item" v-for="(item, index) of imgBase64" :key="index">
        <div class="input-container img-item">
          <span class="iconfont plus">&#xe6f3;</span>
          <input type="file" @change="handleImgInput" class="image-input" />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-title">选择标签</div>
      <span class="footer-item">今天他长这样</span>
      <span class="footer-item">封面萌宠</span>
      <span class="footer-item">视频秀宠</span>
      <span class="footer-item">精品美图</span>
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
        imgBase64: []
      }
    },
    methods: {
      handlePublishClick () {
        const formDate = new FormData()
        formDate.append('content', this.value)
        this.files.forEach((item, index) => {
          formDate.append('images_' + index, this.files[index])
        })
        const params = new URLSearchParams()
        params.append('formDate', formDate)
        axios.post('/api/user/publish.do', params, {
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        })
          .then(this.handlePublishSucc.bind(this))
          .catch(this.handlePublishErr.bind(this))
      },
      handleTextareaChange (e) {
        this.value = e.target.value
      },
      handleImgInput (e) {
        this.files.push(e.target.files[0])
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        const _this = this
        reader.onload = (e) => {
          _this.imgBase64.push(e.target.result)
        }
      },
      handlePublishSucc () {
        console.log('发不成功')
      },
      handlePublishErr () {
        console.log('发布失败')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .publish
    width: 100%
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
        .user-img
          height: 1.45rem
          width: 1.45rem
          margin-right: .1rem
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
      color: #999
      .footer-title
        padding: .2rem
        font-size: .28rem
      .footer-item
        display: block
        overflow: hidden
        float: left
        margin: 0 .2rem .2rem
        padding: 0 .1rem
        width: 1.6rem
        line-height: .5rem
        text-align: center
        font-size: .26rem
        border: .02rem solid #999
        border-radius: .1rem
</style>