const express = require('express')
const http = require('http')
const app = express()
const { resolve } = require('path')

let options = {
  method: "GET",
  port: 3001,
  hostname: 'localhost',
  path: '/get',
}

// 接收游览器请求
app.get('/get', async (req, res) => {
  try {
    // 向后台服务器发送请求
    const ans = await myRequest(options, req)

    // 请求头复制
    Object.entries(ans.headers).forEach(v => {
      res.header(v[0], v[1])
    })

    // 响应后台服务器的数据给游览器
    res.send(ans.data)
  } catch (err) {
    console.log('err', err)
  }
})

// 设置静态资源
app.use('/', express.static(resolve(__dirname,'../client')))

app.listen(3000, () => {
  console.log('proxy at:localhost:3000')
})


// 请求函数
function myRequest(options, req) {
  options.headers = Object.assign({}, req.headers)
  return new Promise((resolve, reject) => {
    http.get(options, res => {
      res.setEncoding('utf8');
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })

      res.on('end', () => {
        res.data = data
        resolve(res)
      })
    })
  })
}