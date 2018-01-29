<template>
  <div>
    <button class="follow-btn main-btn border"
            v-show="follow"
            @click="handleFollowClick"> + 关注</button>
    <button class="follow-btn main-btned border"
            v-show="!follow"
            @click="handleFollowClick"> 已关注</button>
  </div>
</template>

<script>
export default {
  name: 'follow',
  data () {
    return {
      follow: true
    }
  },
  methods: {
    handleFollowClick () {
      this.follow = !this.follow
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/common/mixins.styl'
@import '../assets/styles/common/varibles.styl'
  .follow-btn
    height: .6rem
    width: 1.2rem
    font-size: $FontNormalSize
    &::before
      border-color: #ff7c7c
      border-radius: .3rem
  .main-btn
    color: #ff7c7c
    background: #fff
  .main-btned
    color: #fff
    background: #ff7c7c
    border-radius: .1rem
</style>


