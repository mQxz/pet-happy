<template>
    <div class="channel-list">
      <div class="recommend iconfont">
        &#xe62f;
        <span class="recommend-tlt">热帖推荐</span>
      </div>
      <div class="list-group">
        <div class="group-header">
          <div class="usericon-con">
            <img src="../../../assets/styles/img/classify-img/classify_1.png" class="usericon-img">
          </div>
          <span class="username">茉莉</span>
        </div>
        <div class="group-title">
          <span class="title-notice">#<span>我要上精选</span>#</span>
          宝宝要往外爬，妈妈的大长腿派上用场了
          fhsdajfhakfhd
        </div>
        <div class="group-content">
        </div>
        <div class="group-footer">
          <div class="experience border">养宠心得</div>
          <div class="icons-con">
            <div class="like">
              <span class="iconfont experience-icon">&#xe64c;</span>
              5
            </div>
            <div class="comment">
              <span class="iconfont experience-icon">&#xe6be;</span>
              8
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'channel-list'
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