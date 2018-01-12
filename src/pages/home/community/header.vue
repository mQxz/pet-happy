<template>
  <div class="header">
    <div class="header-item" :class="{active: isShow}"  data-id="choiceness" @click.stop="handleLinkClick">
      精选
    </div>
    <div class="header-item" :class="{active: !isShow}"  data-id="dynamic" @click.stop="handleLinkClick">
      动态
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-header',
    data () {
      return {
        isShow: true
      }
    },
    methods: {
      handleLinkClick (e) {
        const className = e.target.className
        className.indexOf('active') === -1 && (this.isShow = !this.isShow)
        this.$emit('changeType', e.target.dataset.id)
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../../assets/styles/common/varibles.styl'
  .header
    display: flex
    justify-content: center
    height: .88rem
    line-height: .88rem
    font-size: .32rem
    color: #fff
    background: $bgColor
    .header-item
      margin: 0 .25rem
      padding: 0 .16rem
      line-height: .88rem
      text-align: center
    .active
      border-bottom: .1rem solid #fff
</style>
