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
  createTask: ({dispatch}, task) => {
    return Task.create(task)
      .then(() => {
        dispatch('fetchTasks')
        // commit(types.TASK_CREATE, { name, taskId })
      })
      .catch(err => { throw err })
  },
  fetchTasks: ({commit}) => {
    return Task.allFetch()
      .then((res) => {
        commit(types.FETCH_TASKS, res)
      })
      .catch(err => { throw err })
  },
  clearTask: ({dispatch}, taskId) => {
    return Task.clear(taskId)
      .then(() => {
        dispatch('fetchTasks')
      })
      .catch(err => { throw err })
  },
  fetchTask: ({commit}, taskId) => {
    return Task.fetch(taskId)
      .then((res) => {
        commit(types.FETCH_TASK, res)
      })
      .catch(err => { throw err })
  },
  updateTask: ({dispatch}, task) => {
    return Task.update(task)
      .then((res) => {
        dispatch('fetchTasks')
      })
      .catch(err => { throw err })
  }
}
