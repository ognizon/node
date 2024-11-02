// Create Node Server
var http = require('http');
var dt = require('./mymodule');

server = http.createServer( (req, res) =>  { 
  //Server message in terminal
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end('Hello World!');
});

server.listen(8080, ()=> {
  console.log('Server is running at http://localhost:8080/');
});
