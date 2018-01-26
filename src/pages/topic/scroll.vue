<template>
<div>
  <div class="scroller" ref="scroll">
    <ul class="scroller-list">
      <transition name="loading">
        <div class="loading" v-show="isLoading">
          <img class="loading-img" src="../../assets/styles/img/logox2.png" alt="">
          <span class="loading-txt">正在加载……</span>
        </div>
      </transition>
      <li class="scroller-item" v-for="(item, index) in list" :key="index">
          <dl class="item-con border-bottom">
            <dt class="item-dt">
              <img class="item-img" :src="item.imgUrl" alt="" />
            </dt>
            <dd class="item-dd">
              <h2 class="item-title">#{{item.title}}#</h2>
              <p>
                <span class="item-span">热度</span>
                <span class="item-span">{{item.heatNum}}</span>
                <span class="item-span">帖子</span>
                <span class="item-span">{{item.messageNum}}</span>
              </p>
            </dd>
          </dl>
      </li>
    </ul>
  </div>
  <error-msg class="error-msg" v-show="errorMsg"></error-msg>
</div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import ErrorMsg from 'components/error'
export default {
  name: 'scroll',
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
        axios.get('/api/topic/list.json', {
          params: {
            pageNum: this.pageNum
          }
        })
          .then(this.getListDataSucc.bind(this))
          .catch(this.getListDataError.bind(this))
      }
    },

    getListDataSucc (res) {
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
.scroller
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
  .item-con
    display: flex
    padding: .28rem
    .item-dt
      margin-right: .2rem
      .item-img
        height: 1.6rem
        width: 1.6rem
    .item-dd
      flex: 1
      display: flex
      flex-direction: column
      justify-content: space-between
      padding: .2rem 0
      .item-title
        font-size: .32rem
        font-weight: 600
        color: #333
        ellipsis()
      .item-span
        font-size: .3rem
        color: #ccc
        margin-right: .1rem
</style>

