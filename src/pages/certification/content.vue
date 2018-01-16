<template>
  <div class="content" ref="scroll">
      <ul>
        <transition name="loading">
          <div class="loading" v-show="isLoading">
            <img class="loading-img" src="../../assets/styles/img/logox2.png" alt="">
            <span class="loading-txt">正在加载……</span>
          </div>
       </transition>
        <li class="item-icon  border-bottom"
               v-for="(item, index) in list" :key="index">
            <dl class="icon-dl">
                <dt class="icon-dt"><img class="icon-img" :src="item.iconUrl" alt=""></dt>
                <dd class="icon-dd">
                    <h2 class="detail icon-name">{{item.name}}</h2>
                    <div class="detail detail-con">
                        <span class="fans">粉丝 {{item.fans}}</span>
                        <span class="like">赞 {{item.like}}</span>
                    </div>
                    <p class="detail type"><i class="iconfont">&#xe6ae;</i>
                    {{item.type}}</p>
                    <div class="detail-sign">
                        <p class="iconfont">&#xe604;</p>
                        <p class="detail signature">{{item.description}}</p>
                    </div>
                </dd>
            </dl>
            <button class="icon-btn border"> + 关注</button>
      </li></ul>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'cert',
  data () {
    return {
      list: [],
      isLoading: false,
      isFetching: false,
      pageNum: 1,
      pages: 1
    }
  },
  methods: {
    getListData () {
      if (!this.isFetching && this.pageNum <= this.pages) {
        this.isFetching = true
        axios.get('/api/community/cert.json', {
          pageNum: this.pageNum
        })
          .then(this.getListDataSucc.bind(this))
          .catch(this.getListDataError.bind(this))
      }
    },

    getListDataSucc (res) {
      res = res ? res.data : null
      if (res && res.data) {
        res.data.list && (this.list = res.data.list.concat(this.list))
        res.data.pages && (this.pages = res.data.pages)
        this.pageNum += 1
        this.isFetching = false
      } else {
        this.getListDataError()
      }
    },

    getListDataError () {
      this.isFetching = false
      this.isMsgCode = true
    },
    createScroll () {
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: 3,
        click: true
      })
    },

    bindEvents () {
      this.scroll.on('scroll', this.handleScroll.bind(this))
      this.scroll.on('scrollEnd', this.handleScrollEnd.bind(this))
    },
    handleScroll (e) {
      if (e.y > 50 && !this.isLoading) {
        this.getListData()
        this.isLoading = true
      }
    },
    handleScrollEnd () {
      this.isLoading = false
    }
  },

  mounted () {
    this.createScroll()
    this.bindEvents()
  },

  watch: {
    list () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  },

  created () {
    this.getListData()
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/styles/common/mixins.styl'
@import '../../assets/styles/common/varibles.styl'
.content
  flex: 1
  overflow: hidden
  .loading
    text-align: center
    color: $FontLightColor
    .loading-img
      height: .5rem
      width: .5rem
  .loading-enter-active, .loading-leave-active 
    transition: opacity .5s
  .loading-enter, .loading-leave-to
    opacity: 0
  .item-icon
    width: 100%
    padding-top: .2rem
    display: flex
    justify-content: space-between
    &::before
      border-color: #ccc
    .icon-dl
      flex: 1
      display: flex
      .icon-dt
        width: 1rem
        height: 1rem
        margin: 0 .2rem
        .icon-img
          width: 100%
          height: 100%
          border-radius: .5rem
      .icon-dd
        flex: 1
        .detail
          margin-bottom: .2rem
        .icon-name
          font-size: $FontBigSize
          color: #333
          width: 4rem
          ellipsis()
        .detail-con
          font-size: .24rem
          color: $FontLightColor
          .fans
            margin-right: .2rem
        .type, .signature
          font-size:$FontSmallSize
          color: #777
          .iconfont
            margin-right: .1rem
        .detail-sign
          display: flex
          .iconfont
            margin-right: .2rem
          .signature
            line-height: .3rem
    .icon-btn
      height: .6rem
      width: 1.5rem
      font-size: $FontNormalSize
      color: $bgColor
      background: #fff
      margin-right: .2rem
      &::before
        border-color: #ccc
        border-radius:.3rem
      

      
    
</style>


