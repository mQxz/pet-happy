<template>
  <div class="classify border-bottom">
    <div class="items">
      <div class="img-con">
        <img src="../../../assets/styles/img/classify-img/classify_1.png" class="items-img">
        <div class="mask"></div>
        <span class="title">美宠秀秀</span>
      </div>
      <p>新增<span class="number">164</span>条内容</p>
    </div>
    <div class="items">
      <div class="img-con">
        <img src="../../../assets/styles/img/classify-img/classify_2.png" class="items-img">
        <div class="mask"></div>
        <span class="title">养宠心得</span>
      </div>
      <p>新增<span class="number">164</span>条内容</p>
    </div>
    <div class="items">
      <div class="img-con">
        <img src="../../../assets/styles/img/classify-img/classify_3.png" class="items-img">
        <div class="mask"></div>
        <span class="title">剁手败家</span>
      </div>
      <p>新增<span class="number">164</span>条内容</p>
    </div>
    <div class="items">
      <div class="img-con">
        <img src="../../../assets/styles/img/classify-img/classify_4.png" class="items-img">
        <div class="mask"></div>
        <span class="title">囧趣宠事</span>
      </div>
      <p>新增<span class="number">164</span>条内容</p>
    </div>
    <div class="items">
      <div class="img-con">
        <img src="../../../assets/styles/img/classify-img/classify_5.png" class="items-img">
        <div class="mask"></div>
        <span class="title">美宠秀秀DIY</span>
      </div>
      <p>新增<span class="number">164</span>条内容</p>
    </div>
    <div class="items">
      <div class="img-con">
        <img src="../../../assets/styles/img/classify-img/classify_6.png" class="items-img">
        <div class="mask"></div>
        <span class="title">时尚休闲</span>
      </div>
      <p>新增<span class="number">164</span>条内容</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'classify'
  }
</script>

<style scoped lang="stylus">
  .classify
    display: flex
    justify-content: space-around
    align-items: center
    flex-wrap: wrap
    height: 4rem
    color: #737373
    .items
      display: flex
      flex-direction: column
      align-items: center
      width: 30%
      .img-con
        position: relative
        overflow: hidden
        width: 1.14rem
        height: 1.14rem
        margin-bottom: .2rem
        border-radius: .15rem
        .items-img
          width: 100%
        .mask
          position: absolute
          top: 0
          left: 0
          width: 1.14rem
          height: 1.14rem
          text-align: center
          border-radius: .15rem
          background: rgba(0, 0, 0, .3)
        .title
          display: inline-block
          width: 100%
          line-height: .26rem
          position: absolute
          top: 50%
          left: 0
          transform: translateY(-50%)
          font-size: .28rem
          text-align: center
          color: rgba(255, 255, 255, .8)
</style>