<template>
  <div class="content">
    <div>
      <div class="content-top">
        <img class="top-img" src="http://p1.ycw.com/share/201706/15/d61a0e92e5204dcfb273dce381fc2e16_s600" />
      </div>
      <div class="content-main">
        <div class="main-dl">
          <div class="main-dt">
            <img class="main-img" :src="list.iconImg" alt="" />
          </div>
          <div class="main-dd">
            <h2 class="main-name">{{list.nickname}}</h2>
            <p class="main-time">{{list.time}}前</p>
          </div>
        </div>
        <button class="main-btn border"> + 关注</button>
      </div>
      <div class="detail">
        <h2 class="detail-title">{{list.title}}</h2>
        <p class="detail-des">{{list.detailBefore}}</p>
        <div class="detail-before">
          {{list.detailDes}}
        </div>
        <img class="detail-img" :src="list.detailImg" />
        <div class="detail-main">
          {{list.detailMain}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'art-detail',
    data () {
      return {
        list: {},
        id: 1
      }
    },
    methods: {
      getDetailData () {
        this.id = this.$route.query.id
        axios.get('/detail/articleDetail.json?id=' + this.id)
          .then(this.getDetailDataSucc.bind(this))
          .catch(this.getDetailDataError.bind(this))
      },
      getDetailDataSucc (res) {
        res = res ? res.data : null
        if (res.data && res.msgCode === 1) {
          this.list = JSON.parse(JSON.stringify(res.data.list[0]))
        } else {
          this.getDetailDataError()
        }
      },
      getDetailDataError () {
        console.log('服务器错误')
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
</style>