<template>
  <div class="page-main" ref="wrapper">
    <index-header @changeType="handleChangeType"></index-header>

    <div class="page-content">
      <cat :cat="cat" v-show="isShow"></cat>
      <dog :dog="dog" v-show="!isShow"></dog>
    </div>
    <index-footer :routerName="routerName"></index-footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import IndexHeader from './header'
  import Cat from './cat'
  import Dog from './dog'
  import IndexFooter from '../common/footer'
  export default {
    name: 'index',
    data () {
      return {
        cat: [],
        dog: [],
        isShow: true,
        routerName: ''
      }
    },
    components: {
      IndexHeader,
      Cat,
      Dog,
      IndexFooter
    },
    methods: {
      handleChangeType (type) {
        type === 'cat' ? this.handleGetCatData() : this.handleGetDogData()
      },
      handleGetCatData () {
        this.isShow = true
        axios.get('/api/tip/list.json?id=2')
          .then(this.handleGetCatDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDogData () {
        this.isShow = false
        axios.get('/api/tip/list.json?id=1')
          .then(this.handleGetDogDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetCatDataSucc (res) {
        res = res ? res.data : null
        if (res && res.data) {
          if (res.msgCode === 1) {
            this.cat = res.data.list
            res.date.pages && (this.pages = res.data.pages)
          }
        }
      },
      handleGetDogDataSucc (res) {
        res = res ? res.data : null
        if (res && res.data) {
          if (res.msgCode === 1) {
            this.dog = res.data.list
            res.date.pages && (this.pages = res.data.pages)
          }
        }
      },
      handleGetDataErr () {
        this.errorMsg = true
        setTimeout(() => {
          this.errorMsg = false
        }, 2000)
      }
    },
    created () {
      this.handleGetCatData()
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {
        vm.routerName = to.name
      })
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../../assets/styles/common/varibles.styl'
  .page-main
    display: flex
    flex-direction: column
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    .page-content
      flex: 1
      overflow: hidden
    .error
      z-index: 2
      position: absolute
      top: 50%
      left: 50%
      text-align: center
      padding: .2rem
      transform: translate(-50%, -50%)
      font-size: .3rem
      color: #fff
      border-radius: .2rem
      background: rgba(0, 0, 0, .6)
      .notice-icon
        font-size: .7rem
      .error-msg
        line-height: .5rem
</style>