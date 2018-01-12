<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">

      <swiper :options="swiperOption" class="swiper-container">
        <swiper-slide class="img-con" v-for="item of slider" :key="item.id">
          <img :src="item.imgUrl" class="slider-img">
        </swiper-slide>
      </swiper>

      <div class="icons">
        <div class="icons-con">
          <div class="icons-item topic">
            <img src="../../../assets/styles/img/icon_topic.png" class="icon">
            话题
          </div>
          <div class="icons-item spetopic">
            <img src="../../../assets/styles/img/icon_spetopic.png" class="icon">
            专题
          </div>
          <div class="icons-item article">
            <img src="../../../assets/styles/img/icon_article.png" class="icon">
            文章
          </div>
          <div class="icons-item pzn">
            <img src="../../../assets/styles/img/icon_pzn.png" class="icon">
            认证号
          </div>
        </div>
      </div>

      <div class="list">
        <div class="item-area" v-for="item of userlist" :key="item.id">
          <div class="item-header">
            <div class="item-icon-con">
              <img :src="item.usericon" class="user-icon">
            </div>
            <div class="userinfo">
              <div class="name">{{item.username}}</div>
              <div class="position-con">
                <span class="province">{{item.province}}</span>
                <span class="city">{{item.city}}</span>
              </div>
            </div>
            <span class="attention">+ 关注</span>
          </div>
          <div class="title">{{item.title}}</div>
          <div class="item-img-con">
            <img :src="item.imgUrl" class="item-img">
          </div>

          <div class="like-con">
            <div class="like-img-con">
              <div class="like-icon">
                <img :src="item.usericon" class="like-img">
              </div>
              <div class="like-icon">
                <img :src="item.usericon" class="like-img">
              </div>
              <div class="like-icon">
                <img :src="item.usericon" class="like-img">
              </div>
              <span class="like-num">170 赞</span>
            </div>
            <div class="like-sper">
              <span class="iconfont like-sper-icon">&#xe64c;</span>
              <span class="iconfont like-sper-icon">&#xe6be;</span>
            </div>
          </div>

          <div class="comment">
            <div class="comment-item">
              <span class="commentator">老姚</span><span class="comment-txt">：早上好呀</span>
            </div>
            <div class="comment-item">
              <span class="commentator">老姚</span><span class="comment-txt">：早上好呀</span>
            </div>
            <div class="comment-item">
              <span class="commentator">老姚</span><span class="comment-txt">：早上好呀</span>
            </div>
            <div class="comment-item">
              <span class="commentator">老姚</span><span class="comment-txt">：早上好呀</span>
            </div>
            <div class="comment-item total">查看所有<span class="comment-num">83</span>条评论</div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'choiceness',
    props: {
      choiceness: {
        type: Object,
        require: true
      }
    },
    data () {
      return {
        swiperOption: {
          autoplay: 3000,
          loop: true,
          observer: true,
          observeParents: true
        }
      }
    },
    computed: {
      slider () {
        return this.choiceness.slider
      },
      userlist () {
        return this.choiceness.userList
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.scroller = new BScroll(this.$refs.wrapper)
      })
    }
  }
</script>

<style scoped lang="stylus">
  .wrapper
    height: 100%
    overflow: hidden
    .img-con
      overflow: hidden
      height: 0
      padding-bottom: 44%
      .slider-img
        width: 100%
    .icons
      height: 1.52rem
      background: #f5f5f5
      border-bottom: .02rem solid #ccc
      .icons-con
        display: flex
        justify-content:space-around
        align-items: center
        height: 1.52rem
        background: #fff
        .icons-item
          display: flex
          flex-direction: column
          justify-content: space-around
          align-items: center
          height: 1.4rem
          .icon
            width: .8rem
            height: .8rem
    .list
      .item-area
        padding-bottom: .1rem
        border-bottom: .02rem solid #ccc
        .item-header
          position: relative
          display: flex
          align-items: flex-end
          height: 1.06rem
          padding: 0 .2rem
          .item-icon-con
            overflow: hidden
            width: .86rem
            height: .86rem
            border-radius: .43rem
            .user-icon
              width: 100%
          .userinfo
            padding-left: .2rem
            .name
              line-height: .56rem
              font-size: .28rem
              color: #ff7c7c
            .position-con
              line-height: .3rem
              font-size: .22rem
              color: #b6b6b6
              .city
                margin-left: .2rem
          .attention
            display: block
            position: absolute
            width: .86rem
            height: .4rem
            top: 50%
            transform: translateY(-50%)
            right: .2rem
            line-height: .4rem
            text-align: center
            font-size: .18rem
            color: #ff7c7c
            border: .02rem solid #ccc
            border-radius: .1rem
      .title
        padding-left: .2rem
        line-height: .7rem
        font-size: .28rem
      .item-img-con
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 100%
        .item-img
          width: 100%
      .like-con
        display: flex
        justify-content: space-between
        padding: 0 .2rem
        line-height: .68rem
        .like-img-con
          display: flex
          justify-content: center
          align-items: center
          color: #b6b6b6
          .like-icon
            overflow: hidden
            margin-right: .3rem
            width: .44rem
            height: .44rem
            border-radius: .44rem
            .like-img
              display: block
              width: 100%
        .like-sper-icon
          padding-left: .2rem
          font-size: .34rem
      .comment
        padding: 0 .2rem
        .comment-item
          line-height: .46rem
          .commentator
            color: #ff7c7c
          .comment-txt
            color: #b6b6b6
        .total
          text-align: right
          color: #ff7c7c
</style>
