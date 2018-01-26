<template>
  <div class="scroller" ref="scroll">
    <ul>
      <transition name="loading">
        <div class="loading" v-show="isLoading">
          <img class="loading-img" src="../../assets/styles/img/logox2.png" alt="">
          <span class="loading-txt">正在加载……</span>
        </div>
      </transition>
      <li class="content" v-for="(item, index) in list" :key="index">
        <div class="content-img">
            <img :src="item.imgUrl" alt="">
        </div>
        <div class="content-des">
            <div class="des-title">
                <span class="title">{{item.title}}</span>
                <span class="num"><i class="iconfont">&#xe6b8;</i>{{item.messageNum}}</span>
            </div>
            <div class="des-type">《{{item.type}}》</div>
        </div>
      </li>
    <error-msg class="error-msg" v-show="errorMsg"></error-msg>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import ErrorMsg from 'components/error'
export default {
  name: 'special-content',
  data () {
    return {
      list: [],
      isLoading: false,
      isFetching: false,
      isMsgCode: false,
      pageNum: 1,
      pages: 1,
      errorMsg: false
    }
  },
  components: {
    ErrorMsg
  },
  methods: {
    getListData () {
      if (!this.isFetching && this.pageNum <= this.pages) {
        this.isFetching = true
        axios.get('/api/special/select.json', {
          params: {
            pageNum: this.pageNum
          }
        })
          .then(this.getListDataSucc.bind(this))
          .catch(this.getListDataError.bind(this))
      }
    },

    getListDataSucc (res) {
      this.errorMsg = false
      res = res ? res.data : null
      if (res.data && res.msgCode === 1) {
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
      this.errorMsg = true
      setTimeout(() => {
        this.errorMsg = false
      }, 2000)
    },
    createScroll () {
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: 3, click: true
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
    this.$nextTick(() => {
      this.createScroll()
      this.bindEvents()
    })
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
.scroller
  flex: 1
  overflow: hidden
  background: #fff
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
  .content
    background: #eee
    margin: .28rem
    border-radius: .2rem
    .content-img
      shake(46%)
      img 
        width: 100%
        height: 3.2rem
        border-radius: .2rem .2rem 0 0
    .content-des
      padding: .2rem
      height: 1rem
      display: flex
      flex-direction: column
      justify-content: space-around
      .des-title
        .title
          display: inline-block
          width: 66%
          font-size: $FontBigSize
          color: #666
          ellipsis()
        .num
          display: inline-block
          float: right
          color: #aeaeae
          font-size: $FontSmallSize
          .iconfont
            margin-right: .1rem
      .des-type
        font-size: $FontSmallSize
        color: $FontLightColor
</style>


