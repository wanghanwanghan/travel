<template>
    <div>
      <home-header></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :iconList="iconList"></home-icons>
      <home-recommend :list="recommendList"></home-recommend>
      <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios'
  export default {
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    mounted () {
      this.getHomeInfo()
    },
    methods : {
      getHomeInfo () {
        axios.get('/api/index.json').then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc (res) {
        this.swiperList=res.data.data.swiperList
        this.iconList=res.data.data.iconList
        this.recommendList=res.data.data.recommendList
        this.weekendList=res.data.data.weekendList
      }
    },
    data () {
      return {
        swiperList : [],
        iconList : [],
        recommendList:[],
        weekendList:[]
      }
    }
  }
</script>

<style>

</style>
