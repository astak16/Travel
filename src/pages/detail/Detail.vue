<template>
  <div>
    <detail-banner :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" :sightName="sightName"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-lsit :categoryList="categoryList"></detail-lsit>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailLsit from './components/List'
import axios from 'axios'
const debug = process.env.NODE_ENV !== 'production';

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailLsit
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  methods: {
    getDetailInfo () {
      const url = debug ? '/api/detail' : 'https://astak16.github.io/Travel/dist/mock/detail.json'
      axios.get(url, {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style scoped lang="stylus">
  .content
    height: 50rem
</style>
