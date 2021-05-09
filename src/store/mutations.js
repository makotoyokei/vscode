import * as types from './mutation-types'

export default {
  [types.AUTH_LOGIN] (state, payload) {
    state.auth = payload
  },
  [types.AUTH_LOGOUT] (state) {
    state.auth.token = null
    state.auth.userId = null
  },
  [types.FETCH_TASKS] (state, payload) {
    // なぜ削除する要素は2つだけ？ 丸ごと置き換えてはだめな理由がわからない
    state.tasks.splice(0, 2, payload)
  },
  [types.FETCH_TASK] (state, payload) {
    state.task = payload
  }
}
