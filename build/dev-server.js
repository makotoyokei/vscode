const bodyParser = require('body-parser')

module.exports = app =>{
  app.use(bodyParser.json())

  const users = {
    'foo@domain.com' : {
      password: '12345678',
      userId: 1,
    }
  }
  var tasks = [
    {
      taskId: 1,
      name: 'タスクを洗い出す',
      description: ''
    },
    {
      taskId: 2,
      name: 'タスクの優先度をつける',
      description: ''
    }
  ]

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
  app.post('/task', (req, res) => {
    const taskId = req.body.taskId + 1
    const name = req.body.task
    tasks.push({ taskId: taskId, name : name })
    res.status(200).json({ message: 'タスクの追加に成功しました。' })
  })
  app.get('/task', (req, res) => {
    res.json(tasks)
  })
  app.put('/task', (req, res) => {
    const taskId = req.body.taskId
    targetTask = tasks.find(value =>
      value.taskId === taskId
    )
    targetIndex = tasks.indexOf(targetTask)
    tasks.splice(targetIndex, 1)
    res.status(200).json({ message: 'タスクの削除に成功しました。' })
  })
  app.get('/task/:id', (req, res) => {
    const taskId = Number(req.params.id)
    targetTask = tasks.find(value =>
      value.taskId === taskId
    )
    res.json(targetTask)
  })
  app.put('/task/:id', (req, res) => {
    const taskId = Number(req.params.id)
    const name = req.body.taskName
    const description = req.body.description
    targetTask = tasks.find(value =>
      value.taskId === taskId
    )
    targetIndex = tasks.indexOf(targetTask)
    tasks.splice(targetIndex, 1, { taskId: taskId, name: name, description: description})
    res.status(200).json({ message: 'タスクの編集に成功しました。' })
  })
}