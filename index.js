const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) =>  {
  var stream = fs.createReadStream('./index.html')

  stream.on('open', function () {
    stream.pipe(res)
  })

  stream.on('error', function (err) {
    res.end(err)
  });
})

server.listen(3000)