<template>
  <div class="page-main">
    <index-header @changeType="handleChangeType"></index-header>

    <div class="page-content">
      <choiceness :choiceness="choiceness" v-show="isShow"></choiceness>
      <dynamic :dynamic="dynamic" v-show="!isShow"></dynamic>
    </div>
    
    <index-footer></index-footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import IndexHeader from './header'
  import Choiceness from './choiceness'
  import Dynamic from './dynamic'
  import IndexFooter from '../common/footer'
  export default {
    name: 'index',
    data () {
      return {
        choiceness: {},
        dynamic: [],
        isShow: true
      }
    },
    components: {
      IndexHeader,
      Choiceness,
      Dynamic,
      IndexFooter
    },
    methods: {
      handleGetChoicenessDataSucc (res) {
        res && (res = res.data)
        if (res && res.data) {
          if (res.msgCode === '1') {
            this.choiceness = res.data
          }
        }
      },
      handleGetDynamicDataSucc (res) {
        res && (res = res.data)
        if (res && res.data) {
          if (res.msgCode === '1') {
            res.data.list && (this.dynamic = res.data.list)
          }
        }
      },
      handleGetDataErr () {
        console.log('数据获取失败')
      },
      handleChangeType (type) {
        type === 'choiceness' ? this.handleGetChoicenessData() : this.handleGetDynamicData()
      },
      handleGetChoicenessData () {
        this.isShow = true
        axios.get('/api/community/choiceness.json')
          .then(this.handleGetChoicenessDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDynamicData () {
        this.isShow = false
        axios.get('/api/community/dynamic.json')
          .then(this.handleGetDynamicDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      }
    },
    created () {
      this.handleGetChoicenessData()
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
</style>