<template>
<div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
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
  data () {
    return {
      iconList: [{
        id: '0001',
        iconUrl: 'https://fms.res.meizu.com/dms/2018/12/28/20b9fcff-8ec0-4c8a-8619-014f1e31716e.jpg',
        desc: '景点门票景点门票景点门票'
      }, {
        id: '0002',
        iconUrl: 'https://fms.res.meizu.com/dms/2018/11/19/bd78ec91-b232-479e-9b8b-3df2cca4c19a.png',
        desc: '滑雪季节'
      }, {
        id: '0003',
        iconUrl: 'https://fms.res.meizu.com/dms/2019/01/31/2b85640e-a27e-49ea-aa90-3e9159852010.jpg',
        desc: '泡温泉'
      }, {
        id: '0004',
        iconUrl: 'https://fms.res.meizu.com/dms/2019/02/13/f6928733-b38b-4f80-93f8-afea37c0ecc4.png',
        desc: '动植物节'
      }, {
        id: '0005',
        iconUrl: 'https://fms.res.meizu.com/dms/2018/12/28/20b9fcff-8ec0-4c8a-8619-014f1e31716e.jpg',
        desc: '一日游'
      }, {
        id: '0006',
        iconUrl: 'https://fms.res.meizu.com/dms/2018/11/19/bd78ec91-b232-479e-9b8b-3df2cca4c19a.png',
        desc: '必游榜单'
      }, {
        id: '0007',
        iconUrl: 'https://fms.res.meizu.com/dms/2019/01/31/2b85640e-a27e-49ea-aa90-3e9159852010.jpg',
        desc: '自然风光'
      }, {
        id: '0008',
        iconUrl: 'https://fms.res.meizu.com/dms/2019/02/13/f6928733-b38b-4f80-93f8-afea37c0ecc4.png',
        desc: '全部'
      }, {
        id: '0009',
        iconUrl: 'https://fms.res.meizu.com/dms/2019/02/13/f6928733-b38b-4f80-93f8-afea37c0ecc4.png',
        desc: '全部2'
      }]
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
