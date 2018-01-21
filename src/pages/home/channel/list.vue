<template>
    <div class="channel-list">
      <div class="recommend iconfont">
        &#xe62f;
        <span class="recommend-tlt">热帖推荐</span>
      </div>

      <div class="list-group" v-for="(item, index) of list" :key="index">
        <div class="group-header">
          <div class="usericon-con">
            <img :src="item.usericon" class="usericon-img">
          </div>
          <span class="username">{{item.username}}</span>
        </div>
        <div class="group-title">
          <span class="title-notice">#<span>{{item.lightTitle}}</span>#</span>
          {{item.title}}
        </div>
        <div class="group-content">
          <div :class="[item.imgUrl.length > 1 ? 'group-img-con-other' : 'group-img-con-1']" 
               v-for="(imgItem, index) of item.imgUrl" 
               :key="index">
            <img :src="imgItem.imgUrl" class="group-img">
          </div>
        </div>
        <div class="group-footer">
          <div class="experience border">养宠心得</div>
          <div class="icons-con">
            <div class="like">
              <span class="iconfont experience-icon">&#xe64c;</span>
              {{item.linkNumber}}
            </div>
            <div class="comment">
              <span class="iconfont experience-icon">&#xe6be;</span>
              {{item.commentNumber}}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'channel-list',
    props: {
      list: {
        type: Array,
        require: true
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../../assets/styles/common/varibles.styl'
  .channel-list
    flex: 1
    overflow: hidden
    color: #737373
    .recommend
      padding-left: .2rem
      line-height: .55rem
      font-size: .36rem
      .recommend-tlt
        font-size: .22rem
        padding-left: .2rem
    .list-group
      padding: 0 .2rem
      .group-header
        display: flex
        align-items: center
        padding-top: .2rem
        .usericon-con
          overflow: hidden
          width: .84rem
          height: 0
          padding-bottom: .84rem
          border-radius: .42rem
          .usericon-img
            width: 100%
        .username
          display: inline-block
          line-height: .84rem
          font-size: .26rem
          color: $fontRedColor
          margin-left: .22rem
      .group-title
        padding: .15rem 0
        line-height: .36rem
        font-size: .26rem
        .title-notice
          color: $fontRedColor
      .group-content
        display: flex
        justify-content: space-between
        align-content: space-between
        flex-wrap: wrap
        width: 5.6rem
        .group-img-con-1
          overflow: hidden
          width: 5.6rem
          height: 0
          padding-bottom: 5.6rem
          .group-img
            width: 100%
            height: 5.6rem
        .group-img-con-other
          overflow: hidden
          width: 2.75rem
          height: 0
          padding-bottom: 2.05rem
          margin-bottom: .1rem
          .group-img
            width: 100%
            height: 2.05rem
      .group-footer
        display: flex
        justify-content: space-between
        padding: .2rem 0
        .icons-con
          display: flex
          .like
            padding: 0 .2rem
          .experience-icon
            padding: 0 .2rem
        .experience
          display: block
          width: 1.4rem
          line-height: .46rem
          text-align: center
          color: #ff9300
          border: .02rem solid #ff9300
          border-radius: .1rem
</style>