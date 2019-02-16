<template>
  <div class="wrapper">
      <swiper :options="swiperOption">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: '//i8.mifile.cn/v1/a1/a40dde16-6796-fc8d-2fb4-4983106ab8fb!720x360.webp'
      }, {
        id: '0002',
        imgUrl: '//i8.mifile.cn/v1/a1/f91bc067-b5cb-02da-e0a8-cc3fe812b76b!720x360.webp'
      }, {
        id: '0003',
        imgUrl: '//i8.mifile.cn/v1/a1/3bd24537-a0f9-58d7-d468-e158b67af652!720x360.webp'
      }]
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
