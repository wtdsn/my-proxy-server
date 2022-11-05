

let url = 'http://localhost:3001/get'
function getCode() {
  Get(url).then(res => {
    console.log("client,", res.data)
    document.querySelector('#button').innerText = '验证码：' + res.data.preCode || 'error'
  }).catch(err => {
    console.log(err)
  })
}
