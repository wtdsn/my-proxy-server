const express = require('express')
const session = require('express-session')
const app = express()

app.use(session({
  secret: 'proxt-test',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // HTTPS 才有效
    maxAge: 60 * 1000,
  }
}))

// 接收 get 请求，响应 code
app.get('/get', (req, res) => {
  let code = req.session.code || 1000
  req.session.code = Number(code) + 1
  res.send({
    code: 1,
    msg: "请求成功！",
    data: {
      code
    }
  })
})

app.listen(3001, () => {
  console.log(3001);
})