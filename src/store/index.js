import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  actions,
  mutations,
  //类似计算属性
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  },
  //类似命名空间
  modules: {

  }
})
