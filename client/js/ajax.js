function Get(url) {
  return new Promise((resolve) => {
    let XML = new XMLHttpRequest()

    XML.open("GET", url)
    XML.setRequestHeader('content-type', 'application/json')
    XML.withCredentials = true
    XML.send(null)
    XML.onreadystatechange = function () {
      if (XML.readyState === XML.DONE) {
        resolve(JSON.parse(XML.response))
      }
    }
  })
}