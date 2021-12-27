var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, { contentType: "text/plain" });
  response.write("Hello, world");
  response.end();
}

http.createServer(onRequest).listen(8080);
