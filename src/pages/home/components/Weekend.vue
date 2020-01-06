<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of recommendList" :key="index">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    data () {
      return {
        recommendList: [
          {
            id: '01',
            imgUrl: 'https://t11.baidu.com/it/u=3174715579,3176169404&fm=173&app=49&f=JPEG?w=312&h=208&s=1A06C2055103454F58016CD00300C0B4',
            title: '特斯拉毛豆3国产',
            desc: '售价30万售价30万售价30万售价30万售价30万售价30万售价30万售价30万',
          },
          {
            id: '02',
            imgUrl: 'https://t11.baidu.com/it/u=3174715579,3176169404&fm=173&app=49&f=JPEG?w=312&h=208&s=1A06C2055103454F58016CD00300C0B4',
            title: '特斯拉毛豆3国产',
            desc: '售价30万售价30万售价30万售价30万售价30万售价30万售价30万售价30万',
          },
          {
            id: '03',
            imgUrl: 'https://t11.baidu.com/it/u=3174715579,3176169404&fm=173&app=49&f=JPEG?w=312&h=208&s=1A06C2055103454F58016CD00300C0B4',
            title: '特斯拉毛豆3国产',
            desc: '售价30万售价30万售价30万售价30万售价30万售价30万售价30万售价30万',
          },
          {
            id: '04',
            imgUrl: 'https://t11.baidu.com/it/u=3174715579,3176169404&fm=173&app=49&f=JPEG?w=312&h=208&s=1A06C2055103454F58016CD00300C0B4',
            title: '特斯拉毛豆3国产',
            desc: '售价30万售价30万售价30万售价30万售价30万售价30万售价30万售价30万',
          },
          {
            id: '05',
            imgUrl: 'https://t11.baidu.com/it/u=3174715579,3176169404&fm=173&app=49&f=JPEG?w=312&h=208&s=1A06C2055103454F58016CD00300C0B4',
            title: '特斯拉毛豆3国产',
            desc: '售价30万售价30万售价30万售价30万售价30万售价30万售价30万售价30万',
          },
          {
            id: '06',
            imgUrl: 'https://t11.baidu.com/it/u=3174715579,3176169404&fm=173&app=49&f=JPEG?w=312&h=208&s=1A06C2055103454F58016CD00300C0B4',
            title: '特斯拉毛豆3国产',
            desc: '售价30万售价30万售价30万售价30万售价30万售价30万售价30万售价30万',
          },
          {
            id: '07',
            imgUrl: 'https://t11.baidu.com/it/u=3174715579,3176169404&fm=173&app=49&f=JPEG?w=312&h=208&s=1A06C2055103454F58016CD00300C0B4',
            title: '特斯拉毛豆3国产',
            desc: '售价30万售价30万售价30万售价30万售价30万售价30万售价30万售价30万',
          },
          {
            id: '08',
            imgUrl: 'https://t11.baidu.com/it/u=3174715579,3176169404&fm=173&app=49&f=JPEG?w=312&h=208&s=1A06C2055103454F58016CD00300C0B4',
            title: '特斯拉毛豆3国产',
            desc: '售价30万售价30万售价30万售价30万售价30万售价30万售价30万售价30万',
          },
          {
            id: '09',
            imgUrl: 'https://t11.baidu.com/it/u=3174715579,3176169404&fm=173&app=49&f=JPEG?w=312&h=208&s=1A06C2055103454F58016CD00300C0B4',
            title: '特斯拉毛豆3国产',
            desc: '售价30万售价30万售价30万售价30万售价30万售价30万售价30万售价30万',
          },
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 65%
  .item-img
    width 100%
  .item-info
    padding .1rem
  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()
  .item-desc
    line-height .4rem
    color #ccc
    ellipsis()



</style>
