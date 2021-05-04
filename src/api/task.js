import client from './client'

export default {
  create: (task) => {
    return new Promise((resolve, reject) => {
      client.post('/task', task)
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  allFetch: () => {
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
  },
  fetch: (taskId) => {
    return new Promise((resolve, reject) => {
      client.get(`/task/${taskId.taskId}`)
        .then(res => resolve(res.data))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  update: (task) => {
    return new Promise((resolve, reject) => {
      client.put(`/task/${task.taskId}`, task)
        .then(res => resolve(res.data))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
