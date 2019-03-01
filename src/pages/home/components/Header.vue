<template>
<div class="header">
  <div class="header-left">
    <span class="iconfont back-icon">&#xe63b;</span>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe689;</span>
    输入城市/景点/游玩主题
  </div>
  <router-link to="/city">
    <div class="header-right">
      {{this.currentCity}}
      <span class="iconfont arrow-icon">&#xe664;</span>
    </div>
  </router-link>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState({
      // 把 vuex 中的 city 这个公用的数据，映射到当前组件的 computed 中，映射过来的名字叫做 currentCity
      currentCity: 'city'
    })
  }
}
</script>

<style lang="stylus" scoped>
  /*@import '~styles/varibles.styl'*/
  @import '~styles/varibles.styl'
.header
  font-size:16px
  line-height: $headerHeight
  display: flex
  background: $bgColor
  color:#fff
  .header-left
    width:.64rem
    text-align: center
    float:left
    .back-icon
      font-size: .4rem
  .header-input
    flex:1
    height:.64rem
    line-height: .64rem
    margin-top:.12rem
    margin-left:.2rem
    padding-left: .2rem
    background: #fff
    border-radius:.1rem
    color: #cccccc
  .header-right
    min-width:1.04rem
    padding: 0 .1rem 0 .2rem
    float:right
    text-align: center
    color: #fff
    .arrow-icon
      margin-left:-0.1rem
      font-size:.4rem
</style>
