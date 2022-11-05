const express = require('express')
const http = require('http')
const app = express()


app.get('/get', async (req, res) => {
  try {
    const ans = await myRequest('http://localhost:3001/get', req)
    console.log("ans", ans.data);
    Object.entries(ans.headers).forEach(v => {
      res.header(v[0], v[1])
    })
    res.send(ans.data)
  } catch (err) {
    console.log('err', err)
  }
})

app.use('/', express.static('../client'))

app.listen(3000, () => {
  console.log('visit at:175.178.193:3000')
})


function myRequest(url, req) {
  let headers = Object.assign({}, req.headers)
  let options = {
    method: "GET",
    port: 3001,
    hostname: '175.178.193.182',
    path: '/get',
    headers
  }
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