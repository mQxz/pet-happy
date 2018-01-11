<template>
  <div class="scroller" ref="scroll">
    <ul class="scroller-list">
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
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  data () {
    return {
      imgUrl: '',
      list: []
    }
  },
  methods: {
    getListData () {
      axios.get('/api/topicList.json')
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
.scroller
  flex: 1
  overflow: hidden
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
      .item-span
        font-size: .3rem
        color: #ccc
        margin-right: .1rem
</style>

