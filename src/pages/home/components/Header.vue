<template>
<div class="header">
  <div class="header-left">
    <span class="iconfont back-icon">&#xe63b;</span>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe689;</span>
    输入城市/景点/游玩主题
  </div>
  <div class="header-right">
    {{this.city}}
    <span class="iconfont arrow-icon">&#xe664;</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  /*@import '~styles/varibles.styl'*/
  @import '~styles/varibles.styl'
.header
  font-size:16px
  line-height:.86rem
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
    background: #fff
    border-radius:.1rem
    color: #cccccc
  .header-right
    width:1.24rem
    float:right
    text-align: center
    .arrow-icon
      margin-left:-0.04rem
      font-size:.5rem
</style>
