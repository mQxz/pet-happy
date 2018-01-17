<template>
  <div class="icons">
    <div class="icons-con">
      <router-link to="/choiceness/topic" tag="div" class="icons-item topic">
        <img src="../../../../assets/styles/img/icon_topic.png" class="icon">
        话题
      </router-link>
      <router-link to="/choiceness/special" tag="div" class="icons-item spetopic">
        <img src="../../../../assets/styles/img/icon_spetopic.png" class="icon">
        专题
      </router-link>
      <router-link to="/choiceness/article" tag="div" class="icons-item article">
        <img src="../../../../assets/styles/img/icon_article.png" class="icon">
        文章
      </router-link>
      <router-link to="/choiceness/cert" tag="div" class="icons-item pzn">
        <img src="../../../../assets/styles/img/icon_pzn.png" class="icon">
        认证号
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'icons-tab'
  }
</script>

<style scoped lang="stylus">
  .icons
    height: 1.52rem
    background: #f5f5f5
    border-bottom: .02rem solid #ccc
    .icons-con
      display: flex
      justify-content:space-around
      align-items: center
      height: 1.52rem
      background: #fff
      .icons-item
        display: flex
        flex-direction: column
        justify-content: space-around
        align-items: center
        height: 1.4rem
        .icon
          width: .8rem
          height: .8rem
</style>