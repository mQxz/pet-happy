<template>
    <div class="content" ref="scroll">
      <div>
      <div class="content-main">
        <div class="main-dl">
          <div class="main-dt">
            <img class="main-img" :src="detail.iconUrl" alt="" />
          </div>
          <div class="main-dd">
            <h2 class="main-name">{{detail.nickname}}</h2>
          </div>
        </div>
        <button class="main-btn border"
                @click="handleFollowClick"
                ref="follow"> + 关注</button>
      </div>
      <div class="detail">
        <p class="detail-des">{{detail.title}}</p>
        <img class="detail-img" :src="detail.imgUrl" />
        <div class="detail-main">{{detail.content}}</div>
      </div>
      <error-msg v-show="errorMsg"></error-msg>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import ErrorMsg from 'components/error'
  export default {
    name: 'tip-detail',
    data () {
      return {
        detail: {},
        id: 1,
        errorMsg: false,
        followShow: true
      }
    },
    components: {
      ErrorMsg
    },
    methods: {
      handleFollowClick () {
        const followBtn = this.$refs.follow
        if (this.followShow) {
          followBtn.style.background = '#ff7c7c'
          followBtn.style.color = '#fff'
          followBtn.style.borderRadius = '0.1rem'
          followBtn.innerHTML = '已关注'
        } else {
          followBtn.style.background = '#fff'
          followBtn.style.color = '#ff7c7c'
          followBtn.innerHTML = '+关注'
        }
        this.followShow = !this.followShow
      },
      getDetailData () {
        this.id = this.$route.query.id
        console.log(this.id)
        axios.get('/api/tip/view.json', {
          params: {
            id: this.id
          }
        })
          .then(this.getDetailDataSucc.bind(this))
          .catch(this.getDetailDataError.bind(this))
      },
      getDetailDataSucc (res) {
        this.errorMsg = false
        res = res ? res.data : null
        if (res.data && res.msgCode === 1) {
          this.detail = res.data.detail
        } else {
          this.getDetailDataError()
        }
      },
      getDetailDataError () {
        this.errorMsg = true
        setTimeout(() => {
          this.errorMsg = false
        }, 2000)
      },
      createScroll () {
        this.scroll = new BScroll(this.$refs.scroll, {
          probeType: 3,
          click: true,
          bounce: false
        })
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.createScroll()
      })
    },
    watch: {
      article () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    created () {
      this.getDetailData()
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/mixins.styl'
  @import '../../assets/styles/common/varibles.styl'
  .content
    flex: 1
    width: 100%
    overflow: hidden
    position: relative
    .content-main
      box-sizing: border-box
      height: 1.8rem
      padding: .28rem
      display: flex
      justify-content: space-between
      align-items: center
      .main-dl
        display: flex
        .main-dt
          margin-right: .28rem
          width: 1rem
          height: 1rem
          border-radius: .5rem
          .main-img
            height: 100%
            width: 100%
            border-radius: .5rem
        .main-dd
          padding-top: .2rem
          .main-name
            width: 4rem
            font-weight: bold
            font-size: $FontNormalSize
            color: #ff7c7c
            ellipsis()
      .main-btn
        height: .6rem
        width: 1.2rem
        font-size: $FontNormalSize
        color: #ff7c7c
        background: #fff
        &::before
          border-color: #ccc
          border-radius:.3rem
    .detail
      padding: 0 .28rem
      .detail-des
        height: .88rem
        line-height: .88rem
        font-size: $FontNormalSize
        color: #999
        padding-left: .2rem
        background: #eee
        margin-bottom: .3rem
      .detail-img
        width: 100%
        height: 4.2rem
      .detail-main
        line-height: .52rem
        color: #333
        font-size: $FontNormalSize
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
</style>