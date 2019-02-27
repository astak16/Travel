<template>
  <div class="list" ref="listWrapper">
    <ul class="list-wrapper">
      <li class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </li>
      <li class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hotCities"
               :key="item.id"
               @click="handleLetterClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </li>
      <li class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="item-list">
          <div class="item"
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handleLetterClick(innerItem.name)"
          >
            {{innerItem.name}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    handleLetterClick (city) {
      // this.$store.commit('changeCity', city)   等同于下面 this.changeCity(city) + ...mapMutations(['changeCity'])
      this.changeCity(city)
      this.$router.push('/')
    },
    // 有一个 mutation 叫做 changeCity，然后把 mutation 映射到当前组件中一个叫 changeCity 的方法里
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.listWrapper, { mouseWheel: true, click: true, tap: true })
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
