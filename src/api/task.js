import client from './client'

export default {
  create: (task, taskId) => {
    return new Promise((resolve, reject) => {
      client.post('/task', task, taskId)
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  fetch: () => {
    return new Promise((resolve, reject) => {
      client.get('/task')
        .then(res => resolve(res.data))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  clear: (taskId) => {
    return new Promise((resolve, reject) => {
      client.put('/task', taskId)
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
