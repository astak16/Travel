<template>
<div>
  <div
    class="item"
    v-for="(item, index) of categoryList"
    :key="index"
  >
    <div class="item-title">
      <span class="item-title-icon"></span>
      {{item.title}}
    </div>
    <div class="item-title-children" v-if="item.children">
      <detail-list :categoryList="item.children"></detail-list>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    categoryList: Array
  }
}
</script>

<style scoped lang="stylus">
  .item-title-icon
    position: relative
    left: .06rem
    top: .08rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
  .item-title
    line-height: .8rem
    font-size: 16px
    padding: 0 .2rem
  .item-title-children
    padding: 0 .2rem
</style>
