// По обращению к NodeJS серверу выведите в консоль массив всех заголовков запроса.
'use strict'
let http = require('http');

http.createServer( (request, response) => {
  console.log(request.headers);

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('Hello!');
  response.end();
}).listen(8888);
