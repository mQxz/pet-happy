<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      
      <index-swiper :slider="slider"></index-swiper>
      
      <icons-tab></icons-tab>

      <index-list :list="list" @clickComment="handleClickComment"></index-list>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import IndexSwiper from './swiper'
  import IconsTab from './iconsTab'
  import IndexList from './list'
  export default {
    name: 'choiceness',
    props: {
      choiceness: {
        type: Object,
        require: true
      }
    },
    components: {
      IndexSwiper,
      IconsTab,
      IndexList
    },
    data () {
      return {
        pageNum: 2,
        pages: 2,
        isLoading: false,
        slider: [],
        list: []
      }
    },
    watch: {
      choiceness () {
        this.slider = this.choiceness.slider
        this.list = this.choiceness.userList.list
        this.$nextTick(() => {
          this.scroller.refresh()
        })
      },
      list () {
        this.$nextTick(() => {
          this.isLoading = false
          this.scroller.refresh()
        })
      }
    },
    methods: {
      getMoreList () {
        if (this.pageNum <= this.pages) {
          this.isLoading = true
          axios.get('/api/shuo.json?pageNum=' + this.pageNum)
            .then(this.handleGetListSucc.bind(this))
            .catch(this.handleGetListErr.bind(this))
        }
      },
      handleGetListSucc (res) {
        res && (res = res.data)
        if (res && res.data) {
          if (res.msgCode === 1) {
            res.data.list && (this.list = this.list.concat(res.data.list))
            res.data.pages && (this.pages = res.data.pages)
            this.pageNum += 1
          }
        }
      },
      handleGetListErr () {
        this.isLoading = false
        console.log('数据请求失败')
      },
      createScroller () {
        if (!this.scroller) {
          this.scroller = new BScroll(this.$refs.wrapper, {
            probeType: 3,
            click: true,
            scrollY: true
          })
        } else {
          this.scroller.refresh()
        }
      },
      bindEvents () {
        this.scroller.on('scroll', this.handleScroll.bind(this))
      },
      handleScroll (e) {
        this.$emit('choicenessScroll')
        if (e.y < (this.scroller.maxScrollY + 300) && !this.isLoading) {
          this.getMoreList()
        }
      },
      handleClickComment (id) {
        this.$emit('clickComment', id)
      },
      getList () {
        return this.list
      },
      scrollRefresh () {
        this.scroller.refresh()
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.createScroller()
        this.bindEvents()
      })
    }
  }
</script>

<style scoped lang="stylus">
  .wrapper
    height: 100%
    overflow: hidden
</style>
