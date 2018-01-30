<template>
  <div class="page-main">
    <div class="comment-input" v-show="commentShow" ref="inputContainer" @input="handleCommentInput">
      <input type="text" class="comment-text" ref="comInput">
      <button class="comment-btn" @click="handleCommentPublish">完成</button>
    </div>

    <index-header @changeType="handleChangeType"></index-header>

    <div class="page-content">
      <choiceness :choiceness="choiceness" v-show="isShow" @clickComment="handleClickComment" ref="choiceness" @choicenessScroll="handleChoicenessScroll"></choiceness>
      <dynamic :dynamic="dynamic" v-show="!isShow"></dynamic>
    </div>
    
    <index-footer :routerName="routerName"></index-footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import IndexHeader from './header'
  import Choiceness from './choiceness/index'
  import Dynamic from './dynamic/index'
  import IndexFooter from '../common/footer'
  export default {
    name: 'index',
    data () {
      return {
        choiceness: {},
        dynamic: [],
        isShow: true,
        routerName: '',
        commentShow: false,
        commentValue: '',
        id: ''
      }
    },
    components: {
      IndexHeader,
      Choiceness,
      Dynamic,
      IndexFooter
    },
    watch: {
      choiceness () {
        return this.choiceness
      }
    },
    methods: {
      handleGetChoicenessDataSucc (res) {
        res && (res = res.data)
        if (res && res.data) {
          if (res.msgCode === 1) {
            this.choiceness = res.data
          }
        }
      },
      handleGetDynamicDataSucc (res) {
        res && (res = res.data)
        if (res && res.data) {
          if (res.msgCode === 1) {
            res.data.list && (this.dynamic = res.data.list)
          }
        }
      },
      handleGetDataErr () {
        console.log('数据获取失败')
      },
      handleChangeType (type) {
        type === 'choiceness' ? this.handleGetChoicenessData() : this.handleGetDynamicData()
      },
      handleGetChoicenessData () {
        this.isShow = true
        axios.get('/api/choiceness.json', {
          params: {
            pageNum: 1
          }
        })
          .then(this.handleGetChoicenessDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDynamicData () {
        this.isShow = false
        axios.get('./static/dynamic.json')
          .then(this.handleGetDynamicDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleClickComment (id) {
        this.id = id
        this.$refs.comInput.focus()
        this.commentShow = true
      },
      handleCommentInput (e) {
        this.commentValue = e.target.value
      },
      handleCommentPublish () {
        let userId = 0
        try {
          userId = window.localStorage.userId
        } catch (e) {}
        axios.post('/api/insertMessage.json', {
          user_id: userId,
          text: this.commentValue,
          shuo_id: this.id
        })
          .then(this.handleCommentPublishSucc.bind(this))
          .catch(this.handleCommentPublishErr.bind(this))
      },
      handleCommentPublishSucc (res) {
        res && (res = res.data)
        if (res.msgCode === 1 && res.data.message) {
          const comment = {
            id: res.data.message.id,
            nickname: res.data.message.nickname,
            text: res.data.message.text,
            show: false
          }
          this.commentShow = false
          this.$refs.choiceness.getList().forEach((item) => {
            if (item.id === this.id) {
              item.commentList.push(comment)
              if (item.commentList.length > 4) {
                comment.show = false
              } else {
                comment.show = true
              }
            }
          })
        }
      },
      handleCommentPublishErr () {
        console.log('请检查网络设置')
      },
      handleChoicenessScroll () {
        this.commentShow = false
        this.commentValue = ''
      }
    },
    created () {
      this.handleGetChoicenessData()
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
  .page-main
    display: flex
    flex-direction: column
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    .page-content
      flex: 1
      overflow: hidden
    .comment-input
      z-index: 1
      position: absolute
      left: 0
      bottom: 0
      display: flex
      align-items: center
      padding: .1rem
      width: 100%
      background: #fff
      border: .01rem solid #999
      .comment-text
        flex: 1
      .comment-btn
        padding-left: .1rem
        width: 1rem
        background: #fff
</style>