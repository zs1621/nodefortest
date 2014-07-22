var http = require('http');
http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
}).listen(1333, 'localhost');
console.log('Server running at http://local:1333/');
