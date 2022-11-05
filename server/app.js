const express = require('express')
const session = require('express-session')
const app = express()
app.use(session({
  secret: 'cros-test',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // HTTPS 才有效
    maxAge: 60 * 1000,
  }
}))

app.all('*', function (req, res, next) {
  // 配置跨域和允许
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET')
  res.header('Access-Control-Allow-Headers', 'content-type')

  next();
});



app.get('/get', (req, res) => {
  let code = req.session.code || 1000
  req.session.code = Number(preCode) + 1
  res.send({
    code: 1,
    msg: "请求成功！",
    data: {
      code
    }
  })
})

app.use('/', express.static('../client'))

app.listen(3001, () => {
  console.log(3001);
})