const bodyParser = require('body-parser')

module.exports = app =>{
  app.use(bodyParser.json())

  const users = {
    'foo@domain.com' : {
      password: '12345678',
      userId: 1,
    }
  }

  app.post('/auth/login', (req, res) => {
    const { email, password } = req.body
    const user = users[email]
    if (user) {
      if (user.password !== password) {
        res.status(401).json({ message: 'ログインに失敗しました。' })
      } else {
        token = Math.random().toString(36).substring(7)
        res.json({ userId: user.userId, token: token })
      }
    } else {
      res.status(404).json({ message: 'ユーザーが登録されていません。' })
    }
  })
  app.post('/auth/logout', (req, res) => {
    res.status(200).json({ message: 'ログアウトに成功しました。' })
  })
}