<template>
  <div class="list">
    <div class="commentInput" v-show="commentShow">
      <input type="text" class="commentText">
      <button>评论</button>
    </div>
    <div class="item-area" v-for="(item, index) of list" :key="index">
      <div class="item-header">
        <div class="item-icon-con">
          <img :src="item.usericon" class="user-icon">
        </div>
        <div class="userinfo">
          <div class="name">{{item.nickname}}</div>
          <div class="position-con">
            <span class="province">{{item.province}}</span>
            <span class="city">{{item.city}}</span>
          </div>
        </div>
        <span class="attention" @click="handleAttentionClick(item)" v-show="!item.show">+ 关注</span>
        <span class="already_attention" @click="handleAttentionClick(item)" v-show="item.show">已关注</span>
      </div>
      <div class="title">{{item.title}}</div>
      <div class="item-img-con">
        <img :src="item.imgUrl" class="item-img">
      </div>

      <div class="like-con">
        <div class="like-img-con">
          <div class="like-icon" v-for="likeItem of item.userIcons" :key="likeItem.id">
            <img :src="likeItem.iconUrl" class="like-img">
          </div>
          <span class="like-num">{{item.likeNumber}} 赞</span>
        </div>
        <div class="like-sper">
          <span class="iconfont like-sper-icon" 
                @click="handleLikeClick(item)"
                :style="{color: item.likeshow ? '#ff7c7c' : '#333'}">
              &#xe64c;</span>
          <span class="iconfont like-sper-icon" @click="handleCommentClick(item)">&#xe6be;</span>
        </div>
      </div>

      <div class="comment">
        <div class="comment-item" v-show="value.show"  v-for="(value, index) of item.commentList" :key="value.id">
          <span class="commentator">{{value.nickname}}</span><span class="comment-txt">：{{value.text}}</span>
        </div>
        <div class="comment-item total" 
             v-show="item.showMore"
             @click="handleShowAllCommentClick(item)">
          查看所有
          <span class="comment-num">{{item.commentList.length - 4}}</span>条评论
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'index-list',
    props: {
      list: {
        type: Array,
        require: true
      }
    },
    data () {
      return {
        id: '',
        likeNum: '',
        commentShow: true
      }
    },
    watch: {
      likeNum () {
        return this.list
      }
    },
    methods: {
      handleAttentionClick (item) {
        item.show = !item.show
      },
      handleLikeClick (item) {
        this.id = item.id
        axios.get('/api/like.json', {
          params: {
            'id': item.id,
            'status': !item.likeshow
          }
        }).then(this.handleLikeClickSucc.bind(this))
          .catch(this.handleLikeClickErr.bind(this))
      },
      handleLikeClickSucc (res) {
        res && (res = res.data)
        if (res.msgCode === 1) {
          res.data.likeNum && (this.likeNum = res.data.likeNum)
          this.list.forEach((item) => {
            if (item.id === this.id) {
              item.likeshow = !item.likeshow
              item.likeNumber = this.likeNum
            }
          })
        }
      },
      handleLikeClickErr () {
        console.log(11111)
      },
      handleShowAllCommentClick (item) {
        item.showMore = !item.showMore
        item.commentList.forEach((value) => {
          value.show = true
        })
      },
      handleCommentClick (item) {
        console.log(item.id)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .list
    position: relative
    .commentInput
      position: absolute
      left: 0
      bottom: 0
      border: .02rem solid #999
    .item-area
      padding-bottom: .1rem
      border-bottom: .02rem solid #ccc
      .item-header
        position: relative
        display: flex
        align-items: flex-end
        height: 1.06rem
        padding: 0 .2rem
        .item-icon-con
          overflow: hidden
          width: .86rem
          height: .86rem
          border-radius: .43rem
          .user-icon
            width: 100%
        .userinfo
          padding-left: .2rem
          .name
            line-height: .56rem
            font-size: .28rem
            color: #ff7c7c
          .position-con
            line-height: .3rem
            font-size: .22rem
            color: #b6b6b6
            .city
              margin-left: .2rem
        .attention
          display: block
          position: absolute
          width: .86rem
          height: .4rem
          top: 50%
          transform: translateY(-50%)
          right: .2rem
          line-height: .4rem
          text-align: center
          font-size: .18rem
          color: #ff7c7c
          border: .02rem solid #ccc
          border-radius: .1rem
        .already_attention
          display: block
          position: absolute
          width: .86rem
          height: .4rem
          top: 50%
          transform: translateY(-50%)
          right: .2rem
          line-height: .4rem
          text-align: center
          font-size: .18rem
          color: #fff
          background: #ff9300
          border: .02rem solid #ccc
          border-radius: .1rem
    .title
      padding-left: .2rem
      line-height: .7rem
      font-size: .28rem
    .item-img-con
      overflow: hidden
      width: 100%
      height: 0
      padding-bottom: 100%
      .item-img
        width: 100%
    .like-con
      display: flex
      justify-content: space-between
      padding: 0 .2rem
      line-height: .68rem
      .like-img-con
        display: flex
        justify-content: center
        align-items: center
        color: #b6b6b6
        .like-icon
          overflow: hidden
          margin-right: .3rem
          width: .44rem
          height: .44rem
          border-radius: .44rem
          .like-img
            display: block
            width: 100%
      .like-sper-icon
        padding-left: .2rem
        font-size: .34rem
    .comment
      padding: 0 .2rem
      .comment-item
        line-height: .46rem
        .commentator
          color: #ff7c7c
        .comment-txt
          color: #b6b6b6
      .total
        text-align: right
        color: #ff7c7c
</style>
