<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item" :ref="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    props: {
      cities: Object
    },
    methods: {
      handleLetterClick (e) {
        //向外触发事件
        this.$emit('change',e.target.innerText)
      },
      handleTouchStart () {
        this.touchStatus=true
      },
      handleTouchMove (e) {
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            const startY = this.startY
            const touchY = e.touches[0].clientY - 43 - 31
            const index = Math.floor((touchY - startY) / 22)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change',this.letters[index])
            }
          }, 16)//16毫秒
        }
      },
      handleTouchEnd () {
        this.touchStatus=false
      }
    },
    data () {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    updated () {
      //当页面数据被更新，页面完成渲染之后
      this.startY = this.$refs['A'][0].offsetTop
    },
    computed: {
      letters () {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
  .item
    line-height .45rem
    text-align center
    color $bgColor



</style>
