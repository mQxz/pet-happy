<template>
  <div>
    <div class="header">
      <div class="close iconfont">&#xe600;</div>
    </div>
    <div class="reg-container">
      <div class="reg-img-con">
        <img src="../../assets/styles/img/logox2.png" alt="register" class="reg-img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reg-header'
}
</script>

<style scoped lang="stylus">
.header
  height: .88rem
  line-height: .88rem
  .close
    width: 1.44rem
    line-height: .88rem
    text-align: center
    font-size: .4rem
    color: #fff
.reg-container
  width: 100%
  height: 3.4rem
  .reg-img-con
    overflow: hidden
    width: 3.4rem
    height: 0
    margin: 0 auto
    padding-bottom: 100%
    .reg-img
      width: 100%
</style>


