// Create Node Server
var http = require('http');
var dt = require('./mymodule');

http.createServer(function (req, res)  { 
  //Server message in terminal
  console.log('Welcome');
console.log('Server is running at http://localhost:8080/');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end('Hello World!');
}).listen(8080);
