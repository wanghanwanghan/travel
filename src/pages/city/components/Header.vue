<template>
    <div>
      <div class="header">
        选择城市
        <router-link to="/">
          <div class="iconfont header-back">&#xe743;</div>
        </router-link>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'CityHeader'
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .header
    position relative
    height $headerHeight
    line-height $headerHeight
    overflow hidden
    text-align center
    color #fff
    background $bgColor
    font-size .3rem
  .header-back
    color white
    position absolute
    top 0
    left 0
    width .64rem
    text-align center
    font-size .4rem



</style>
