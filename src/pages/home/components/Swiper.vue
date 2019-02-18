<template>
  <div class="wrapper">
      <swiper :options="swiperOption" v-if="showSwiperList">
          <swiper-slide v-for="item of swiperList" :key="item.id" alt="">
            <img class="swiper-img" :src="item.imgUrl">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiperList () {
      return this.swiperList.length
    }
  }
}
</script>

<style scoped lang="stylus">
  .wrapper
    overflow:hidden
    width:100%
    height:0
    padding-bottom:50%
    background: #eee
    .swiper-img
      width:100%
</style>
