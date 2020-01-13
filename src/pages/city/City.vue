<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
  import axios from 'axios'
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  export default {
    name: 'City',
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet,
    },
    methods: {
      getCityInfo () {
        axios.get('/api/city.json').then(this.getCityInfoSucc)
      },
      getCityInfoSucc (res) {
        console.log(res)
        this.cities = res.data.data.cities
        this.hotCities = res.data.data.hotCities
      },
      //@change监听
      handleLetterChange (letter) {
        this.letter=letter
      }
    },
    mounted () {
      this.getCityInfo()
    },
    data () {
      return {
        cities: {},
        hotCities: [],
        letter: ''
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
