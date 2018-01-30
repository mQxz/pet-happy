<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">

      <div class="icons">
        <div class="icons-con">
          <div class="icons-item topic">
            <img src="../../../../assets/styles/img/dynamic/remmond.png" class="icon">
            推荐
          </div>
          <div class="icons-item spetopic">
            <img src="../../../../assets/styles/img/dynamic/new.png" class="icon">
            最新
          </div>
          <div class="icons-item message">
            <img src="../../../../assets/styles/img/dynamic/single.png" class="icon">
            颜值
          </div>
          <div class="icons-item pzn">
            <img src="../../../../assets/styles/img/dynamic/star.png" class="icon">
            明星
          </div>
        </div>
      </div>    
      <div class="list">
        <div class="item-area" v-for="item of dynamic" :key="item.id">
          <div class="item-header">
            <div class="item-icon-con">
              <img :src="item.usericon" class="user-icon">
            </div>
            <div class="text-con">
              <div class="name">{{item.nickname}}</div>
              <div class="time">{{item.time}}</div>
            </div>
          </div>
          <div class="item-img-con">
            <img :src="item.imgUrl" class="item-img">
          </div>
          <div class="operate-con">
            <div class="title">热赞宠友</div>
            <div class="operate">
              <div>
                <i class="iconfont">&#xe64c;</i>
                <span class="likenum">{{item.like}}</span>
              </div>
              <div>
                <i class="iconfont">&#xe6be;</i>
                <span class="commentnum">{{item.comment}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <list :dynamic="dynamic"></list>
      
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import List from './list'
  export default {
    name: 'dynamic',
    props: {
      dynamic: {
        type: Array,
        require: true
      }
    },
    components: {
      List
    },
    watch: {
      dynamic () {
        this.$nextTick(() => {
          this.scroller.refresh()
        })
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.scroller = new BScroll(this.$refs.wrapper, {
          bounce: false
        })
      })
    }
  }
</script>

<style scoped lang="stylus">
  .wrapper
    height: 100%
    overflow: hidden
    .icons
      background: #f5f5f5
      .icons-con
        display: flex
        justify-content:space-around
        align-items: center
        height: 2.2rem
        background: #fff
        border-bottom: .02rem solid #ccc
        .icons-item
          display: flex
          flex-direction: column
          justify-content: space-around
          align-items: center
          height: 1.6rem
          .icon
            width: .8rem
            height: .8rem
    .list
      .item-area
        background: #f5f5f5
        padding-bottom: .2rem
        .item-header
          display: flex
          padding: .2rem
          background: #fff
          .item-icon-con
            overflow: hidden
            width: .8rem
            height: .8rem
            border-radius: .4rem
            .user-icon
              width: 100%
          .text-con
            display: flex
            flex-direction: column
            justify-content: space-around
            padding-left: .2rem
            font-size: .2rem
        .item-img-con
          overflow: hidden
          width: 100%
          height: 0
          padding-bottom: 100%
          background: #fff
          .item-img
            width: 100%
        .operate-con
          display: flex
          justify-content: space-between
          align-items: center
          padding: .2rem
          background: #fff
          .title
            font-size: .32rem
          .operate
            display: flex
            justify-content: space-between
            width: 1.5rem
            line-height: .32rem
</style>
