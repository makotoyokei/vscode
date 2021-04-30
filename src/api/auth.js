import client from './client'

export default {
  login: authInfo => {
    return new Promise((resolve, reject) => {
      client.post('/auth/login', authInfo)
        .then(res => resolve({ token: res.data.token, userId: res.data.userId }))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  logout: () => {
    return new Promise((resolve, reject) => {
      client.post('/auth/logout')
        .then(res => resolve(console.log(res)))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
