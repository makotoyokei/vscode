import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  auth: {
    // localStorageにトークンいれてた気がするけどstoreにもあるのなぜ？
    token: null,
    userId: null
  },
  tasks: [
    // taskIdがnullである場合も考慮しなければいけないのは結構めんどくさい
    // 普通に初期化時は空配列でいいのでは？
    {
      taskId: null,
      name: null,
      description: null,
      taskType: null
    }
  ],
  task: {
    taskId: null,
    name: null,
    description: null,
    taskType: null
  },
  // これって可変なの？
  // 可変じゃないならstoreに入れずに定数として定義すべき
  taskType: {
    todo: 1,
    wip: 2,
    done: 3
  }
}

// 今は一緒のファイルでもいいけど、理想としては
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
