<template>
  <div class="page-main">
    <index-header></index-header>
    <div class="page-content" ref="wrapper">
      <div>
        <classify></classify>
        <channel-list></channel-list>
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
        list: []
      }
    },
    components: {
      IndexFooter,
      IndexHeader,
      Classify,
      ChannelList
    },
    methods: {
      handleGetDynamicDataSucc (res) {
        res && (res = res.data)
        if (res && res.data) {
          if (res.msgCode === '1') {
            res.data.list && (this.dynamic = res.data.list)
          }
        }
      },
      handleGetDataErr () {
        console.log('数据获取失败')
      },
      handleGetDynamicData () {
        this.isShow = false
        axios.get('api/dynamic.json')
          .then(this.handleGetDynamicDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.scroller = new BScroll(this.$refs.wrapper)
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