<template>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe743;</div>
      </div>
        <div class="header-input">
          <span class="iconfont">&#xe748;</span>
          输入城市/景点/游玩/主题
        </div>
      <router-link to="/City">
        <div class="header-right">{{this.city}}
          <span class="iconfont arrow-icon">&#xe7b2;</span>
        </div>
      </router-link>
    </div>
</template>

<script>
  import { mapState,mapGetters } from 'vuex'
  export default {
    name: 'HomeHeader',
    computed: {
      ...mapState(['city']),
      ...mapGetters(['doubleCity'])
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .header
    display flex
    line-height .86rem
    background $bgColor
    color #fff
  .header-left
    width .64rem
    float left
  .back-icon
    text-align center
    font-size .4rem
  .header-input
    flex 1
    background #fff
    border-radius .1rem
    margin-top .12rem
    margin-left .2rem
    line-height .64rem
    height .64rem
    color: #ccc;
  .header-right
    min-width 1.04rem
    padding 0 .1rem
    float right
    text-align center
    color white
  .arrow-icon
    font-size .24rem

</style>
