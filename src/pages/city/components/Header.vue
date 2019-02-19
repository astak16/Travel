<template>
<div class="header">
  <div class="header-left">
    <router-link to="/">
      <span class="iconfont back-icon">&#xe63b;</span>
    </router-link>
  </div>
  城市选择
</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .header
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    position: relative
    .header-left
      position: absolute
      left:0
      top:0
      width:.64rem
      text-align: center
      float:left
      .back-icon
        font-size: .4rem
        color: #fff
</style>
