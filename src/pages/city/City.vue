<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
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
      }
    },
    mounted () {
      this.getCityInfo()
    },
    data () {
      return {
        cities: {},
        hotCities: []
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
