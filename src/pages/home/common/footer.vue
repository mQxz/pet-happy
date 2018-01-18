<template>
  <div class="footer border-top">
    <router-link to="community" tag="div" class="footer-item community">
      <!-- <div class="iconfont footer-icon">&#xe602;</div> -->
      <img class="icons-img" src="../../../assets/styles/img/footer/community_g.png" v-show="comShow"/>
      <img class="icons-img" src="../../../assets/styles/img/footer/community_y.png" v-show="!comShow" />
      社区
    </router-link>
    <router-link to="channel" tag="div" class="footer-item channel">
      <!-- <div class="iconfont footer-icon">&#xe634;</div> -->
      <img class="icons-img" src="../../../assets/styles/img/footer/channel_g.png" v-show="chaShow"/>
      <img class="icons-img" src="../../../assets/styles/img/footer/channel_y.png" v-show="!chaShow"/>
      频道
    </router-link>
    <router-link to="publish" tag="div" class="footer-item publish">
      <div class="publish-con">
        <div class="iconfont plus">&#xe6f3;</div>
      </div>
    </router-link>
    <router-link to="tips" tag="div" class="footer-item tips">
      <!-- <div class="iconfont footer-icon">&#xe858;</div> -->
      <img class="icons-img" src="../../../assets/styles/img/footer/tip_g.png" v-show="tipShow"/>
      <img class="icons-img" src="../../../assets/styles/img/footer/tip_y.png" v-show="!tipShow"/>
      小贴士
    </router-link>
    <router-link to="mine" tag="div" class="footer-item mine">
      <!-- <div class="iconfont footer-icon">&#xe640;</div> -->
      <img class="icons-img" src="../../../assets/styles/img/footer/mine_g.png" v-show="mineShow"/>
      <img class="icons-img" src="../../../assets/styles/img/footer/mine_y.png" v-show="!mineShow"/>
      我的
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'index-footer',
    props: {
      routerName: String
    },
    data () {
      return {
        comShow: true,
        chaShow: true,
        tipShow: true,
        mineShow: true
      }
    },
    watch: {
      routerName () {
        this.comShow = true
        this.chaShow = true
        this.tipShow = true
        this.mineShow = true
        switch (this.routerName) {
          case 'community': this.comShow = false
            break
          case 'channel': this.chaShow = false
            break
          case 'tips': this.tipShow = false
            break
          case 'mine': this.mineShow = false
            break
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .footer
    display: flex
    justify-content: space-between
    align-items: center
    padding: 0 .3rem
    height: 1rem
    .footer-item
      position: relative
      display: flex
      flex-direction: column
      justify-content: space-around
      align-items: center
      width: 1rem
      height: 1rem
      .publish-con
        position: absolute
        bottom: 0
        height: 1.3rem
        width: 1.3rem
        background: #fff
        border-radius: .75rem
        .plus
          position: absolute
          top: 50%
          left: 50%
          transform: translate(-50%, -50%)
          width: .86rem
          line-height: .86rem
          text-align: center
          font-size: .6rem
          color: #fff
          background: #fec955
          border-radius: .43rem
      .icons-img
        width: .5rem
        height: .5rem
      &.router-link-active
        color: #fec955
</style>