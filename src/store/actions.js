import * as types from './mutation-types'
import {Auth} from '../api'

export default {
  login: ({commit}, authInfo) => {
    return Auth.login(authInfo)
      .then(({ token, userId }) => {
        commit(types.AUTH_LOGIN, { token, userId })
      })
      .catch(err => { throw err })
  },
  logout: ({commit}) => {
    return Auth.logout()
      .then(() => {
        commit(types.AUTH_LOGOUT)
      })
      .catch(err => { throw err })
  }
}
