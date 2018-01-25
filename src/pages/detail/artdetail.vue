<template>
  <div class="content" ref="scroll">
    <div>
      <div class="content-top">
        <img class="top-img" src="http://img3.imgtn.bdimg.com/it/u=12470753,3814202608&fm=27&gp=0.jpg" />
      </div>
      <div class="content-main">
        <div class="main-dl">
          <div class="main-dt">
            <img class="main-img" :src="article.iconUrl" alt="" />
          </div>
          <div class="main-dd">
            <h2 class="main-name">{{article.name}}</h2>
            <p class="main-time">{{article.time}}前</p>
          </div>
        </div>
        <button class="main-btn border"> + 关注</button>
      </div>
      <div class="detail">
        <h2 class="detail-title">{{article.title}}</h2>
        <p class="detail-des">为你的爱宠营造一个温暖的家</p>
        <div class="detail-before">
          请给我一点时间，让我明白你对我的要求，请真诚对待我，这是我幸福的关键。别生我的气太长时间，也不要把我关起来当做惩罚。你有工作、娱乐、朋友，我却只有你。跟我说说话吧，即使我不明白你在说什么，却能明白你声音里的感情。
        </div>
        <img class="detail-img" :src="article.imgUrl" />
        <div class="detail-main">
          {{article.content}}
        </div>
      </div>
      <error-msg v-show="errormsg"></error-msg>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import ErrorMsg from 'components/error'
  export default {
    name: 'art-detail',
    data () {
      return {
        article: {},
        id: 1,
        errormsg: false
      }
    },
    components: {
      ErrorMsg
    },
    methods: {
      getDetailData () {
        this.id = this.$route.query.id
        axios.get('/api/detail/view.json' + this.id)
          .then(this.getDetailDataSucc.bind(this))
          .catch(this.getDetailDataError.bind(this))
      },
      getDetailDataSucc (res) {
        res = res ? res.data : null
        if (res.data && res.msgCode === 1) {
          this.article = res.data.article
        } else {
          this.getDetailDataError()
        }
      },
      getDetailDataError () {
        this.errormsg = true
      },
      createScroll () {
        this.scroll = new BScroll(this.$refs.scroll, {
          probeType: 3,
          click: true
        })
      }
    },
    mounted () {
      this.createScroll()
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
    .content-top
      height: 0
      overflow: hidden
      padding-bottom: 50%
      .top-img
        height: 3.78rem
        width: 100%
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
          display: flex
          flex-direction: column
          justify-content: space-around
          .main-name
            width: 4rem
            font-weight: bold
            font-size: $FontNormalSize
            color: #ff7c7c
            ellipsis()
          .main-time
            font-size: $FontSmallSize
					  color: $FontLightColor
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
      .detail-title
        height: .3rem
        font-size: .3rem
        color: #333
        margin-bottom: .4rem
      .detail-des
        height: .88rem
        line-height: .88rem
        font-size: $FontNormalSize
        color: #999
        padding-left: .2rem
        background: #eee
        margin-bottom: .3rem
      .detail-before
        line-height: .52rem
        color: #333
        font-size: $FontNormalSize
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