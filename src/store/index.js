import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  auth: {
    token: null,
    userId: null
  },
  task: [
    {
      taskId: null,
      name: null,
      description: null,
      taskType: null
    }
  ]
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
