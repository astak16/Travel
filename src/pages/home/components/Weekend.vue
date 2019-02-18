<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
        title: '京城有好泉',
        desc: '细数北京温泉，温暖你的冬天'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
        title: '京城有好泉',
        desc: '细数北京温泉，温暖你的冬天'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
        title: '京城有好泉',
        desc: '细数北京温泉，温暖你的冬天'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styl"
  .weekend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    font-size:16px
  .item-img-wrapper
    height: 0
    padding-bottom: 33.9%
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
