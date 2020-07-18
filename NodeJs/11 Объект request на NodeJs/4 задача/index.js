// По обращению к NodeJS серверу выведите в консоль содержимое заголовка Host.
'use strict'
let http = require('http');

http.createServer( (request, response) => {
  console.log(request.headers.host);

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('ok!');
  response.end();
}).listen(8888);
