<template>
  <!--ref帮助获取dom-->
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="(item,index) of hot" :key="index">
            <div class="button" :id="item.id" :cityname="item.spell">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item1,index1) of cities" :key="index1">
        <div class="title border-topbottom">{{index1}}</div>
        <div class="item-list" v-for="(item2,index2) of item1" :key="index2">
          <div class="item border-bottom">{{item2.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    name: 'CityList',
    props: {
      hot: Array,
      cities: Object
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .border-topbottom
    &:before
       border-color #ccc
    &:after
       border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .list
    position absolute
    top 1.55rem
    left 0
    right 0
    bottom 0
    overflow hidden
  .title
    line-height .54rem
    background #eee
    padding-left .2rem
    font-size .26rem
  .button-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden
  .button-wrapper
    float left
    width 33.33%
  .button
    text-align center
    padding .1rem
    margin .1rem
    border .02rem solid #ccc
    border-radius .1rem
  .item-list
  .item
    line-height .76rem
    padding .1rem


</style>
