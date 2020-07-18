// По обращению к NodeJS серверу выведите в консоль метод запроса.
'use strict'

let http = require('http');

http.createServer( (request, response) => {
  console.log(request.method);

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<i>Hello</i>');
  response.end();
}).listen(8888);
