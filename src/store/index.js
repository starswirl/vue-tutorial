import { createStore } from 'vuex'
import counter from './modules/counter'
import dogApi from './modules/dogApi'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { counter, dogApi },
})
