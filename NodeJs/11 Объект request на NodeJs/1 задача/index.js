// По обращению к NodeJS серверу выведите в консоль URL запрошенной страницы.
'use strict'
let http = require('http');

http.createServer( (request, response) => {
  console.log(request.url);

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<b>Hello world!</b>');
  response.end();
}).listen(8888);
