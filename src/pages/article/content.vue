<template>
  <div class="content">
    <ul>
      <li class="content-item border-bottom"
          v-for="(item, index) in list"
          :key="index">
        <div class="item-icon">
            <dl class="icon-dl">
                <dt class="icon-dt"><img class="icon-img" :src="item.iconUrl" alt=""></dt>
                <dd class="icon-dd">
                  <h2 class="icon-name">{{item.name}}</h2>
                  <p class="icon-time">{{item.time}}前</p>
                </dd>
            </dl>
            <button class="icon-btn border"> + 关注</button>
        </div>
        <div class="item-detail border">
            <div class="detail-img border-bottom">
                <img class="img-url" :src="item.imgUrl" alt="">
            </div>
            <div class="detail-des">
                <p class="des des-title">{{item.title}}</p>
                <p class="des des-subname">{{item.subName}}</p>
            </div>
        </div>
        <div class="item-bottom">
            <button class="type border"><i class="iconfont">&#xe605;</i>
            {{item.type}}</button>
            <div class="right-con">
            <div class="like"><i class="iconfont">&#xe608;</i>{{item.like}}</div>
            <div class="comment"><i class="iconfont">&#xe6be;</i>{{item.comment}}</div>
            </div>   
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'article-content',
  data () {
    return {
      list: []
    }
  },
  methods: {
    getListData () {
      axios.get('/api/community/article.json')
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
    }
  },
  mounted () {
    this.getListData()
  }

}
</script>

<style scoped lang="stylus">
@import '../../assets/styles/common/mixins.styl'
@import '../../assets/styles/common/varibles.styl'
.content
  flex: 1
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
            font-size: $FontBigSize
            font-weight: bold
            color: #558bad
          .icon-time
            font-size: $FontSmallSize
            color: $FontLightColor
      .icon-btn
        height: .6rem
        width: 1.5rem
        font-size: $FontNormalSize
        color: $bgColor
        background: #fff
        &::before
          border-color: #ccc
          border-radius:.3rem
    .item-detail
      padding-bottom: .3rem
      .detail-img
        height: 3.2rem
        .img-url
          height: 100%
          width: 100%
      .detail-des
        .des
          margin-top:.3rem
          padding-left: .2rem
        .des-title
          font-size: $FontBigSize
          font-weight: bold
        .des-subname
          font-size: $FontSmallSize
          color: $FontLightColor
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


