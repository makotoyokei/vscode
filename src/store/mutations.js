import * as types from './mutation-types'

export default {
  [types.AUTH_LOGIN] (state, payload) {
    state.auth = payload
  },
  [types.AUTH_LOGOUT] (state) {
    state.auth.token = null
    state.auth.userId = null
  }
}
