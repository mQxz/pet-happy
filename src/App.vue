<template>
  <div id="app">
    <keep-alive>
      <transition :name="transitionName">
        <router-view class="child-view"></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        transitionName: 'slide-right'
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    beforeDestroy () {
      console.log(11111)
      try {
        window.localStorage.userId && window.localStorage.clear()
      } catch (e) {}
    }
  }
</script>

<style>
  .child-view {
    position: absolute;
    transition: all 1s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }

</style>
