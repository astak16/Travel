<template>
  <div class="list" ref="listWrapper">
    <ul class="list-wrapper">
      <li class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </li>
      <li class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </li>
      <li class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="item-list">
          <div class="item" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.listWrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .list
    overflow: auto
    position: absolute
    left: 0
    right: 0
    top: 1.58rem
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
      border-top: 1px solid #ccc
      border-bottom: 1px solid #ccc
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          font-size: 14px
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        font-size: 14px
      line-height: .76rem
      padding-left: .2rem
      border-bottom: 1px solid #ccc
</style>
