<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of weekendList" :key="item.id" v-if="showWeekendList">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  },
  computed: {
    showWeekendList () {
      return this.weekendList.length
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styl"
  .weekend-title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    font-size:16px
  .item-img-wrapper
    height: 0
    padding-bottom: 37.09%
    overflow: hidden
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    min-width:0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      font-size: .24rem
      ellipsis()
</style>
