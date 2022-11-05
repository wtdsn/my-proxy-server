let url = 'http://localhost:3000/get'
function getCode() {
  Get(url).then(res => {
    document.querySelector('#button').innerText = '验证码：' + res.data.code || 'error'
  }).catch(err => {
    console.log(err)
  })
}
