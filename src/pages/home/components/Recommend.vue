<template>
    <div>
      <div class="title">热销推荐</div>
      <ul>
        <li class="item border-bottom" v-for="(item,index) of recommendList" :key="index">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" />
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    data () {
      return {
        recommendList: [
          {
            id: '01',
            imgUrl: 'http://hiphotos.baidu.com/news/crop%3D0%2C4%2C716%2C481%3Bq%3D80%3B/sign=e5a807748582b90129e299734ebd8543/d62a6059252dd42a02602df80c3b5bb5c9eab873.jpg',
            title: '特斯拉毛豆3国产',
            desc: '售价30万售价30万售价30万售价30万售价30万售价30万售价30万售价30万',
          },
          {
            id: '02',
            imgUrl: 'http://hiphotos.baidu.com/news/crop%3D0%2C4%2C716%2C481%3Bq%3D80%3B/sign=e5a807748582b90129e299734ebd8543/d62a6059252dd42a02602df80c3b5bb5c9eab873.jpg',
            title: '特斯拉毛豆3国产',
            desc: '售价30万售价30万售价30万售价30万售价30万售价30万售价30万售价30万',
          },
          {
            id: '03',
            imgUrl: 'http://hiphotos.baidu.com/news/crop%3D0%2C4%2C716%2C481%3Bq%3D80%3B/sign=e5a807748582b90129e299734ebd8543/d62a6059252dd42a02602df80c3b5bb5c9eab873.jpg',
            title: '特斯拉毛豆3国产',
            desc: '售价30万售价30万售价30万售价30万售价30万售价30万售价30万售价30万',
          },
          {
            id: '04',
            imgUrl: 'http://hiphotos.baidu.com/news/crop%3D0%2C4%2C716%2C481%3Bq%3D80%3B/sign=e5a807748582b90129e299734ebd8543/d62a6059252dd42a02602df80c3b5bb5c9eab873.jpg',
            title: '特斯拉毛豆3国产',
            desc: '售价30万售价30万售价30万售价30万售价30万售价30万售价30万售价30万',
          },
          {
            id: '05',
            imgUrl: 'http://hiphotos.baidu.com/news/crop%3D0%2C4%2C716%2C481%3Bq%3D80%3B/sign=e5a807748582b90129e299734ebd8543/d62a6059252dd42a02602df80c3b5bb5c9eab873.jpg',
            title: '特斯拉毛豆3国产',
            desc: '售价30万售价30万售价30万售价30万售价30万售价30万售价30万售价30万',
          },
          {
            id: '06',
            imgUrl: 'http://hiphotos.baidu.com/news/crop%3D0%2C4%2C716%2C481%3Bq%3D80%3B/sign=e5a807748582b90129e299734ebd8543/d62a6059252dd42a02602df80c3b5bb5c9eab873.jpg',
            title: '特斯拉毛豆3国产',
            desc: '售价30万售价30万售价30万售价30万售价30万售价30万售价30万售价30万',
          },
          {
            id: '07',
            imgUrl: 'http://hiphotos.baidu.com/news/crop%3D0%2C4%2C716%2C481%3Bq%3D80%3B/sign=e5a807748582b90129e299734ebd8543/d62a6059252dd42a02602df80c3b5bb5c9eab873.jpg',
            title: '特斯拉毛豆3国产',
            desc: '售价30万售价30万售价30万售价30万售价30万售价30万售价30万售价30万',
          },
          {
            id: '08',
            imgUrl: 'http://hiphotos.baidu.com/news/crop%3D0%2C4%2C716%2C481%3Bq%3D80%3B/sign=e5a807748582b90129e299734ebd8543/d62a6059252dd42a02602df80c3b5bb5c9eab873.jpg',
            title: '特斯拉毛豆3国产',
            desc: '售价30万售价30万售价30万售价30万售价30万售价30万售价30万售价30万',
          },
          {
            id: '09',
            imgUrl: 'http://hiphotos.baidu.com/news/crop%3D0%2C4%2C716%2C481%3Bq%3D80%3B/sign=e5a807748582b90129e299734ebd8543/d62a6059252dd42a02602df80c3b5bb5c9eab873.jpg',
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
  .item
    display flex
    overflow hidden
    height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    min-width 0
    flex 1
    padding .1rem
  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()
  .item-desc
    line-height .4rem
    color #ccc
    ellipsis()
  .item-button
    margin-top .3rem
    line-height .5rem
    background orange
    padding 0 .2rem
    border-radius .6rem
    color #fff




</style>
