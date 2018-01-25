<template>
  <div class="list">
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
          <div class="like-icon" v-for="likeItem of item.usericons" :key="likeItem.id">
            <img :src="likeItem.iconUrl" class="like-img">
          </div>
          <span class="like-num">{{item.likeNumber}} 赞</span>
        </div>
        <div class="like-sper">
          <span class="iconfont like-sper-icon">&#xe64c;</span>
          <span class="iconfont like-sper-icon">&#xe6be;</span>
        </div>
      </div>

      <div class="comment">
        <div class="comment-item"  v-for="value of item.commentList" :key="value.id">
          <span class="commentator">{{value.nickname}}</span><span class="comment-txt">：{{value.text}}</span>
        </div>
        <div class="comment-item total">查看所有<span class="comment-num">{{item.number}}</span>条评论</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-list',
    props: {
      list: {
        type: Array,
        require: true
      }
    },
    methods: {
      handleAttentionClick (item) {
        item.show = !item.show
      }
    }
  }
</script>

<style scoped lang="stylus">
  .list
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
