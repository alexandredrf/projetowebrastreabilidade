var http = require('http');
var static = require('node-static');

var path = new static.Server(`${__dirname}`)

http.createServer(function (req, res) {
    req.addListener('end', function () {
        path.serve(req, res)
    }).resume()
  }).listen(7000);


  console.log('Server criado em: localhost:7000')