import * as types from './mutation-types'
import {Auth, Task} from '../api'

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
  },
  createTask: ({dispatch}, task, taskId) => {
    return Task.create(task, taskId)
      .then(() => {
        dispatch('fetchTask')
        // commit(types.TASK_CREATE, { name, taskId })
      })
      .catch(err => { throw err })
  },
  fetchTask: ({commit}) => {
    return Task.fetch()
      .then((res) => {
        commit(types.FETCH_TASK, res)
      })
      .catch(err => { throw err })
  },
  clearTask: ({dispatch}, taskId) => {
    return Task.clear(taskId)
      .then(() => {
        dispatch('fetchTask')
      })
      .catch(err => { throw err })
  }
}
