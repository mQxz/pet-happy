<template>
  <div class="wrapper" ref="scroll">
      <div class="main">
        <div class="cat-icon">
          <img class="cat-img" src="../../../assets/styles/img/tips-img/dog.png" alt="">
        </div>
        <div class="cat-detail" v-for="item in dogList" :key="item.id">
            <p class="detail-title">{{item.title}}</p>
            <div class="detail-des border-bottom">
              <div class="des-left">
                  <h2 class="content">{{item.content}}</h2>
                  <div class="des-bom">
                    <p class="cate">{{item.cate}}</p>
                    <span class="look"><i class="iconfont">&#xe6b8;</i>{{item.look}}</span>
                  </div>
              </div>
              <div class="des-right">
                  <img class="right-img" :src="item.imgUrl" alt="">
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'dog',
  props: {
    dog: {
      type: Object,
      required: true
    }
  },
  computed: {
    dogList () {
      return this.dog.list
    }
  },
  watch: {
    dog () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.scroll)
  }
}
</script>

<style scoped lang="stylus">
@import '../../../assets/styles/common/mixins.styl'
@import '../../../assets/styles/common/varibles.styl'
.wrapper
  height: 100%
  overflow: hidden
.cat-icon
  shake(52%)
  .cat-img
    height: 3.94rem
    width: 100%
.cat-detail
  .detail-title
    padding: .2rem .2rem 0
    font-size: .24rem
    color: $FontLightColor
  .detail-des
    display: flex
    padding: .2rem
    &::before
      border-color: #ccc
    .des-left
      flex: 1
      display: flex
      flex-direction: column
      justify-content: space-between
      .content
        ellipsis()
        width: 4rem
        font-size: .32rem
      .des-bom
        display: flex
        font-size: .2rem
        color: $FontLightColor
        .cate
          width: 4rem
        .look
          .iconfont
            margin-right: .16rem
    .des-right
      width: 1.7rem
      height: 1.36rem
      margin-left: .2rem
      .right-img
        width: 100%
        height: 100%
          

</style>

