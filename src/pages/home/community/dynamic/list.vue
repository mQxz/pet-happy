<template>
  <div class="list">
    <div class="item-area" v-for="item of dynamic" :key="item.id">
      <div class="item-header">
        <div class="item-icon-con">
          <img :src="item.usericon" class="user-icon">
        </div>
        <div class="text-con">
          <div class="name">{{item.username}}</div>
          <div class="time">{{item.time}}</div>
        </div>
      </div>
      <div class="item-img-con">
        <img :src="item.imgUrl" class="item-img">
      </div>
      <div class="operate-con">
        <div class="title">热赞宠友</div>
        <div class="operate">
          <div>
            <i class="iconfont">&#xe64c;</i>
            <span class="likenum">{{item.like}}</span>
          </div>
          <div>
            <i class="iconfont">&#xe6be;</i>
            <span class="commentnum">{{item.comment}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dynamic-list',
    props: {
      dynamic: {
        type: Array,
        require: true
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../../../assets/styles/common/varibles.styl'
  .list
    .item-area
      background: #f5f5f5
      padding-bottom: .2rem
      .item-header
        display: flex
        padding: .2rem
        background: #fff
        .item-icon-con
          overflow: hidden
          width: 1rem
          height: 1rem
          border-radius: .5rem
          .user-icon
            width: 100%
        .text-con
          display: flex
          flex-direction: column
          justify-content: space-between
          padding: .15rem 0 .05rem .2rem
          font-size: .2rem
          .name
            font-size: .28rem
            color: $fontRedColor
      .item-img-con
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 100%
        background: #fff
        .item-img
          width: 100%
      .operate-con
        display: flex
        justify-content: space-between
        align-items: center
        padding: .2rem
        background: #fff
        .title
          font-size: .32rem
        .operate
          display: flex
          justify-content: space-between
          width: 1.5rem
          line-height: .32rem
</style>
