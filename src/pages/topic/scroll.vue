<template>
  <div class="scroller" ref="scroll">
    <ul class="scroller-list">
      <li class="scroller-item">
          <dl class="item-con border-bottom">
            <dt class="item-dt">
              <img class="item-img" src="../../assets/styles/img/topic.jpg" alt="" />
            </dt>
            <dd class="item-dd">
              <h2 class="item-title">#送祝福赢好礼#</h2>
              <p>
                <span class="item-span">热度</span>
                <span class="item-span">193</span>
                <span class="item-span">帖子</span>
                <span class="item-span">43</span>
              </p>
            </dd>
          </dl>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'scroll',
  data () {
    return {
      imgUrl: ''
    }
  }
}
</script>

<style scoped lang="stylus">
.item-con
  display: flex
  padding: .28rem
  .item-dt
    margin-right: .2rem
    .item-img
      height: 1.6rem
      width: 1.6rem
  .item-dd
    flex: 1
    display: flex
    flex-direction: column
    justify-content: space-between
    padding: .2rem 0
    .item-title
      font-size: .32rem
      font-weight: 600
      color: #333
    .item-span
      font-size: .3rem
      color: #ccc
      margin-right: .1rem
</style>

