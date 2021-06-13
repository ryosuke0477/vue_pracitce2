import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    clickName:"",
  },
  mutations: {
    incrementMutation(state,team) {
      state.count = state.count + 1;
      state.clickName=team
    }
  },
  actions: {
  },
  modules: {
  }
})
