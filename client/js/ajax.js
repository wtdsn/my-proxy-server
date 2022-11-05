function Get(url) {
  return new Promise((resolve) => {
    let XML = new XMLHttpRequest()

    XML.open("GET", url)
    XML.withCredentials = true
    XML.send(null)
    XML.onreadystatechange = function () {
      if (XML.readyState === XML.DONE) {
        resolve(JSON.parse(XML.response))
      }
    }
  })
}