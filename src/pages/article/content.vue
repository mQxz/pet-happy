<template>
    <div class="content" ref="scroll">
      <ul><transition name="loading">
          <div class="loading" v-show="isLoading">
            <img class="loading-img" src="../../assets/styles/img/logox2.png" alt="">
            <span class="loading-txt">正在加载……</span>
          </div>
       </transition>
      <li class="content-item border-bottom" 
          v-for="(item, index) in list"
          :key="item.id">
        <div class="item-icon">
            <dl class="icon-dl">
                <dt class="icon-dt"><img class="icon-img" :src="item.iconUrl" alt=""></dt>
                <dd class="icon-dd">
                  <h2 class="icon-name">{{item.name}}</h2>
                  <p class="icon-time">{{item.time}}前</p>
                </dd>
            </dl>
            <follow-show></follow-show>
        </div>
        <router-link :to='"/article/detail?id=" + item.id'>
        <div class="item-detail border">
            <div class="detail-img border-bottom">
                <img class="img-url" :src="item.imgUrl" alt="">
            </div>
            <div class="detail-des">
                <p class="des des-title">{{item.title}}</p>
                <p class="des des-subname">{{item.content}}</p>
            </div>
        </div>
        </router-link>
        <div class="item-bottom">
            <button class="type border"><i class="iconfont">&#xe605;</i>
            {{item.title_type}}</button>
            <div class="right-con">
            <div class="like">
              <i class="iconfont nolike" v-show="like" @click="handleLikeClick(index)">&#xe608;</i>
              <i class="iconfont liked" v-show="!like" @click="handleNoLikeClick(index)">&#xe608;</i>
              <i class="like-num" ref="likeNum">{{item.title_like}}</i>
            </div>
            <div class="comment"><i class="iconfont">&#xe6be;</i>{{item.tilte_comment}}</div>
            </div>   
        </div>
      </li>
      <error-msg v-show="errorMsg"></error-msg>
      </ul>
    </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import ErrorMsg from 'components/error'
import FollowShow from 'components/follow'
export default {
  name: 'article-content',
  data () {
    return {
      list: [],
      isLoading: false,
      isFetching: false,
      pageNum: 1,
      pages: 1,
      errorMsg: false,
      like: true,
      num: 1
    }
  },
  components: {
    ErrorMsg,
    FollowShow
  },
  methods: {
    handleLikeClick (index) {
      console.log(this.num)
      this.like = false
      this.num = this.num + 1
      this.$refs.likeNum[index].innerText = this.num
    },
    handleNoLikeClick (index) {
      this.like = true
      this.num = this.num - 1
      this.$refs.likeNum[index].innerText = this.num
    },
    getListData () {
      if (!this.isFetching && this.pageNum <= this.pages) {
        this.isFetching = true
        axios.get('/api/article/select.json', {
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
      if (res && res.data) {
        res.data.list && (this.list = res.data.list.concat(this.list))
        res.data.pages && (this.pages = res.data.pages)
        res.data.title_like && (this.num = parseInt(res.data.title_like))
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
  .content-item
    padding: 0 .28rem
    .item-icon
      box-sizing: border-box
      height: 1.8rem
      padding: .28rem 0
      display: flex
      justify-content: space-between
      align-items: center
      .icon-dl
        display: flex
        .icon-dt
          margin-right: .28rem
          width: 1rem
          height: 1rem
          border-radius: .5rem
          .icon-img
            width: 100%
            height: 100%
            border-radius: .5rem
        .icon-dd
          display: flex
          flex-direction: column
          justify-content: space-around
          .icon-name
            width: 4rem
            font-size: $FontNormalSize
            font-weight: bold
            color: #ff7c7c
            ellipsis()
          .icon-time
            font-size: $FontSmallSize
            color: $FontLightColor
    .item-detail
      padding-bottom: .3rem
      .detail-img
        shake(46%)
        .img-url
          height: 3.4rem
          width: 100%
      .detail-des
        .des
          margin-top:.3rem
          padding-left: .2rem
        .des-title
          font-size: $FontBigSize
          font-weight: bold
          ellipsis()
        .des-subname
          font-size: $FontSmallSize
          color: $FontLightColor
          ellipsis()
    .item-bottom
      display: flex
      justify-content: space-between
      align-items: center
      height: 1rem
      .right-con
        display: flex
        justify-content: space-between
        color: $FontLightColor
        .like
         margin-right: .3rem
        .iconfont
          margin-right: .1rem
        .liked
          color: red
      .type
        height: .6rem
        padding: 0 .2rem
        color: #558bad
        background: #fff
        &::before
          border-color: #558bad
          border-radius: .2rem 
        .iconfont
          margin-right: .2rem
</style>


