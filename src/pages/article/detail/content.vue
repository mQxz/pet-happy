<template>
	<div class="content">
		<div>
      <div class="content-top">
        <img class="top-img" src="../../../assets/styles/img/topic.jpg" />
      </div>
      <div class="item">
        <dl class="item-dl">
          <dt class="item-dt">
            <!-- <img class="item-img" src="" alt=""> -->
          </dt>
          <dd class="item-dd">
            <!-- <h2 class="item-name">{{list[0].nickname}}</h2> -->
            <!-- <p class="item-time">{{list[0].time}}前</p> -->
          </dd>
        </dl>
        <button class="item-btn border"> + 关注</button>
      </div>
      <div class="detail">
        <!-- <h2 class="detail-title">{{list[0].title}}</h2> -->
        <!-- <p class="detail-des">{{list[0].detailBefore}}</p> -->
        <div class="detail-before">
          <!-- {{list[0].detailDes}} -->
        </div>
        <!-- <img class="detail-img" :src="list[0].detailImg" /> -->
        <div class="detail-main">
          <!-- {{list[0].detailMain}} -->
        </div>
		  </div>
    </div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'art-detail',
  data () {
    return {
      list: []
    }
  },
  methods: {
    getDetailData () {
      axios.get('/api/articleDetail.json')
        .then(this.getDetailDataSucc.bind(this))
        .catch(this.getDetailDataError.bind(this))
    },
    getDetailDataSucc (res) {
      res = res ? res.data : null
      if (res.data && res.msgCode === 1) {
        res.data.list && (this.list = res.data.list.concat(this.list))
      } else {
        this.getDetailDataError()
      }
    },
    getDetailDataError () {
      console.log('服务器错误')
    }
  },
  created () {
    this.getDetailData()
  }
}
</script>

<style scoped lang="stylus">
@import '../../../assets/styles/common/mixins.styl'
@import '../../../assets/styles/common/varibles.styl'

.content
	flex: 1
  width: 100%
	.content-top
		height: 0
		overflow: hidden
		padding-bottom: 50%
		.top-img
			height: 3.78rem
			width: 100%
	.item
		box-sizing: border-box
		height: 1.8rem
		padding: .28rem
		display: flex
		justify-content: space-between
		align-items: center
		.item-btn
			height: .6rem
			width: 1.2rem
			font-size: $FontNormalSize
			color: #ff7c7c
			background: #fff
			&::before
				border-color: #ccc
				border-radius:.3rem
		.item-dl
			display: flex
			.item-dt
				margin-right: .28rem
				width: 1rem
				height: 1rem
				border-radius: .5rem
				.item-img
					width: 100%
					height: 100%
					border-radius: .5rem
			.item-dd
				display: flex
				flex-direction: column
				justify-content: space-around
				.item-name
					width: 4rem
					font-size: $FontNormalSize
					font-weight: bold
					color: #ff7c7c
					ellipsis()
				.item-time
					font-size: $FontSmallSize
					color: $FontLightColor
	.detail
		padding:0 .28rem
		.detail-title
			height: .3rem
			font-size: .3rem
			color: #333
			margin-bottom: .4rem
		.detail-des
			height: .88rem
			line-height: .88rem
			font-size: $FontNormalSize
			color: #999
			padding-left: .2rem
			background: #eee
			margin-bottom: .3rem
		.detail-before
			line-height: .52rem
			color: #333
			font-size: $FontNormalSize
		.detail-img
			width: 100%
			height: 4.2rem
		.detail-main
			line-height: .52rem
			color: #333
			font-size: $FontNormalSize
</style>