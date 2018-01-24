<template>
  <div class="page-main">
    <index-header></index-header>
    <div class="page-content" ref="wrapper">
      <div>
        <classify :classifyNum="classifyNum"></classify>
        <channel-list :list="list"></channel-list>
      </div>
    </div>
    
    <index-footer :routerName="routerName"></index-footer>
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
        pageNum: 1,
        pages: 1,
        routerName: ''
      }
    },
    components: {
      IndexFooter,
      IndexHeader,
      Classify,
      ChannelList
    },
    watch: {
      list () {
        this.$nextTick(() => {
          this.isLoading = false
          this.scroller.refresh()
        })
      }
    },
    methods: {
      getData () {
        axios.get('/api/channel/select.json', {
          pageNum: this.pageNum
        })
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      getMoreList () {
        if (!this.isLoading && this.pageNum <= this.pages) {
          this.isLoading = true
          axios.get('/api/channel/select.json', {
            pageNum: this.pageNum
          })
            .then(this.handleGetOtherDataSucc.bind(this))
            .catch(this.handleGetOtherDataErr.bind(this))
        }
      },
      createScroller () {
        this.scroller = new BScroll(this.$refs.wrapper, {
          probeType: 3,
          click: true
        })
      },
      bindEvents () {
        this.scroller.on('scroll', this.handleScroll.bind(this))
      },
      handleGetDataSucc (res) {
        res && (res = res.data)
        if (res && res.data) {
          if (res.msgCode === 1) {
            res.data.classify && (this.classifyNum = res.data.classify)
            res.data.list && (this.list = res.data.list)
            res.data.pages && (this.pages = res.data.pages)
            this.pageNum += 1
          }
        }
      },
      handleGetDataErr () {
        console.log('数据获取失败')
      },
      handleScroll (e) {
        if (e.y < (this.scroller.maxScrollY + 300) && !this.isLoading) {
          this.getMoreList()
        }
      },
      handleGetOtherDataSucc (res) {
        res && (res = res.data)
        if (res && res.data) {
          if (res.msgCode === 1) {
            res.data.list && (this.list = this.list.concat(res.data.list))
            res.data.pages && (this.pages = res.data.pages)
            this.pageNum += 1
          }
        }
      },
      handleGetOtherDataErr () {
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
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {
        vm.routerName = to.name
      })
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