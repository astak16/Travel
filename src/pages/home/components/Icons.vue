<template>
<div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index" v-if="showIconList">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.iconUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoPlay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showIconList () {
      return this.iconList.length
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
.icons >>> .swiper-container
  height: 0
  padding-bottom:50%
.icon
  float: left
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 25%
  width:25%
  .icon-img
    position: absolute
    bottom:.44rem
    left:0
    right:0
    top:0
    box-sizing: border-box
    padding:.1rem
    .icon-img-content
      display: block
      margin:0 auto
      height :100%
  .icon-desc
    position: absolute
    left:0
    bottom:0
    right:0
    color: $darkTextColor
    line-height: .44rem
    height: .44rem
    font-size:16px
    text-align: center
    ellipsis ()
</style>
