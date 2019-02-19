<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .search
    height: 0.72rem
    padding: 0 .1rem
    background: $bgColor
    position: relative
    .search-input
      position: absolute
      top: 50%
      left: .1rem
      transform: translateY(-50%)
      font-size:14px
      box-sizing: border-box
      width: calc(100% - .2rem)
      height: .62rem
      line-height: .62rem
      padding: 0 .1rem
      text-align: center
      border-radius: .06rem
      color: #666
</style>
