var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  var myReadStream = fs.use(express.static(path.join(__dirname, 'public')));
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Listening bra')



