<template>
  <div class="wiper">
    <swiper :options="swiperOption" ref="mySwiper">

      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
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
        swiperOption : {
          pagination : '.swiper-pagination',
          loop : true
        },
        swiperList : [
          {
            id : "1",
            imgUrl : "https://dimg04.c-ctrip.com/images/zg091b000001a3dk5F24B.jpg"
          },
          {
            id : "2",
            imgUrl : "https://dimg04.c-ctrip.com/images/zg0s180000014rym6B157.jpg"
          }
        ]
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
    padding-bottom 60%
    background #eee
  .swiper-img
    width 100%
</style>
