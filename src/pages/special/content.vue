<template>
  <div class="scroller" ref="scroll">
    <ul>
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
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'special-content',
  data () {
    return {
      list: []
    }
  },
  methods: {
    getListData () {
      axios.get('/api/community/special.json')
      .then(this.getListDataSucc.bind(this))
      .catch(this.getListDataError.bind(this))
    },

    getListDataSucc (res) {
      res = res ? res.data : null
      if (res && res.data) {
        this.list = res.data.list
      } else {
        this.getListDataError()
      }
    },

    getListDataError () {
      console.log('error')
    },
    createScroll () {
      this.scroll = new BScroll(this.$refs.scroll)
    }
  },
  mounted () {
    this.getListData()
    this.createScroll()
  },

  watch: {
    list () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/styles/common/mixins.styl'
@import '../../assets/styles/common/varibles.styl'
.scroller
  flex: 1
  overflow: hidden
  background: #f5f5f5
  .content
    background: #fff
    margin: .28rem
    border-radius: .2rem
    .content-img
      height: 3rem
      width: 100% 
      img 
        width: 100%
        height: 100%
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
          ellipsis()
        .num
          display: inline-block
          float: right
          color: $FontLightColor
          font-size: $FontSmallSize
          .iconfont
            margin-right: .1rem
      .des-type
        font-size: $FontSmallSize
        color: $FontLightColor
      


</style>


