var http = require("http"); // 1 - Import Node.js core module

var server = http.createServer((req, res) => {
  // 2 - creating server
  res.write("Hello World!!");
  res.end();
  //handle incomming requests here..
});

server.listen(5000); //3 - listen for any incoming requests

console.log("Node.js web server at port 5000 is running..");
