<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">故宫（AAAAA景区）</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>8</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallayClose"></common-gallary>
  </div>
</template>

<script>
import commonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg',
        'http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_350x240_cf4cd08e.png',
        'http://img1.qunarzz.com/wugc/p238/201306/16/d9090c728fed64eb93835fbb.jpg_350x240_afe6c0fa.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallayClose () {
      this.showGallary = false
    }
  },
  components: {
    commonGallary
  }
}
</script>

<style scoped lang="stylus">
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      font-size: 14px
      color: #fff
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        font-size: .24rem
        padding: 0 .4rem
        margin-top: .18rem
        height: .32rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0,0,0,.8)
        .banner-icon
          font-size: .24rem
</style>
