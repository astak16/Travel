<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <span class="iconfont header-abs-back">&#xe63b;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="OpacityStyle">
      <div class="header-left">
        <router-link to="/">
          <span class="iconfont header-fixed-back">&#xe63b;</span>
        </router-link>
      </div>
      景点详情w3243
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      OpacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.OpacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    border-radius: .4rem
    background: rgba(0, 0, 0, .8)
    line-height: .8rem
    display: flex
    justify-content: center
    align-items: center
    .header-abs-back
      color: #fff
      font-size: 20px
  .header-fixed
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    position: fixed
    top: 0
    left: 0
    right: 0
    .header-left
      position: absolute
      left:0
      top:0
      width:.64rem
      text-align: center
      float:left
      .header-fixed-back
        font-size: .4rem
        color: #fff
</style>
