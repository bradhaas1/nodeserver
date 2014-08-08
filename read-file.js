var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hi!");
  console.log("Server has responded to request");
  // get all request parameters
  // console.log(request);
  response.end();
}).listen(8888, function(){
  console.log("Server has started");
});
