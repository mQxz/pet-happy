<template>
  <div class="page-main">
    <index-header></index-header>
    <div class="page-content" ref="wrapper">
      <div>
        <classify :classifyNum="classifyNum"></classify>
        <channel-list :list="list"></channel-list>
      </div>
    </div>
    
    <index-footer></index-footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import IndexFooter from '../common/footer'
  import IndexHeader from './header'
  import Classify from './classify'
  import ChannelList from './list'
  export default {
    name: 'index',
    data () {
      return {
        classifyNum: [],
        list: [],
        isLoading: false,
        isFetching: false,
        pageNum: 1
      }
    },
    components: {
      IndexFooter,
      IndexHeader,
      Classify,
      ChannelList
    },
    methods: {
      getData () {
        axios.get('/api/channel/channel.json', {
          pageNum: this.pageNum
        })
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      getMoreList () {
        if (!this.isFetching) {
          this.isFetching = true
          axios.get('/api/channel/channel.json', {
            pageNum: this.pageNum
          })
            .then(this.handleGetOtherDataSucc.bind(this))
            .catch(this.handleGetOtherDataErr.bind(this))
        }
      },
      createScroller () {
        this.scroller = new BScroll(this.$refs.wrapper, {
          probeType: 3
        })
      },
      bindEvents () {
        this.scroller.on('scroll', this.handleScroll.bind(this))
        this.scroller.on('scrollEnd', this.handleScrollEnd.bind(this))
      },
      handleGetDataSucc (res) {
        res && (res = res.data)
        if (res && res.data) {
          if (res.msgCode === '1') {
            res.data.classify && (this.classifyNum = res.data.classify)
            res.data.list && (this.list = res.data.list)
          }
        }
      },
      handleGetDataErr () {
        console.log('数据获取失败')
      },
      handleScroll (e) {
        if ((e.y) < (this.scroller.maxScrollY + 100) && !this.isLoading) {
          this.isLoading = true
          this.getMoreList()
        }
      },
      handleGetOtherDataSucc (res) {
        res && (res = res.data)
        if (res && res.data) {
          if (res.msgCode === '1') {
            res.data.list && (this.list = this.list.concat(res.data.list))
            this.pageNum += 1
          }
        }
        this.$nextTick(() => {
          this.isFetching = false
        })
      },
      handleGetOtherDataErr () {
        this.isFetching = false
        console.log('数据获取失败')
      },
      handleScrollEnd () {
        this.isLoading = false
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.createScroller()
        this.bindEvents()
      })
    },
    created () {
      this.getData()
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../../assets/styles/common/varibles.styl'
  .page-main
    display: flex
    flex-direction: column
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    .page-content
      flex: 1
      overflow: hidden
</style>