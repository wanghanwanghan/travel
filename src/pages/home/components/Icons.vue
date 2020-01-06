<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl" />
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
  export default {
    name : 'HomeIcons',
    data () {
      return {
        swiperOption : {
          autoplay : false
        },
        iconList: [
          {
            id: '01',
            imgUrl: '//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png',
            desc: '热门景点'
          },
          {
            id: '02',
            imgUrl: '//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png',
            desc: '热门景点'
          },
          {
            id: '03',
            imgUrl: '//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png',
            desc: '热门景点'
          },
          {
            id: '04',
            imgUrl: '//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png',
            desc: '热门景点'
          },
          {
            id: '05',
            imgUrl: '//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png',
            desc: '热门景点'
          },
          {
            id: '06',
            imgUrl: '//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png',
            desc: '热门景点'
          },
          {
            id: '07',
            imgUrl: '//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png',
            desc: '热门景点'
          },
          {
            id: '08',
            imgUrl: '//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png',
            desc: '热门景点'
          },
          {
            id: '09',
            imgUrl: '//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png',
            desc: '热门景点'
          },
          {
            id: '10',
            imgUrl: '//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png',
            desc: '热门景点'
          },
          {
            id: '11',
            imgUrl: '//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png',
            desc: '热门景点'
          },
          {
            id: '12',
            imgUrl: '//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png',
            desc: '热门景点'
          }
        ]
      }
    },
    computed : {
      pages () {
        const pages = []
        this.iconList.forEach((item,index) => {
          const page = Math.floor(index/8)
          if (!pages[page]) pages[page]=[]
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
    .icon
      height 0
      position relative
      overflow hidden
      float left
      width 25%
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .icon-img-content
          height 100%
          display block
          margin 0 auto
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        text-align center
        height .44rem
        line-height .44rem
</style>
