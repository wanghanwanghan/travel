<template>
  <div class="wiper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="this.showSwiper">

      <swiper-slide v-for="item of this.list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>

    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    computed : {
      showSwiper () {
        return this.list.length
      }
    },
    props: {
      list: Array
    },
    data () {
      return {
        swiperOption : {
          pagination : '.swiper-pagination',
          loop : true
        },
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wiper >>> .swiper-pagination-bullet-active
    background white
  .wiper
    overflow hidden
    width 100%
    height 0
    padding-bottom 30%
    background #eee
  .swiper-img
    width 100%
</style>
