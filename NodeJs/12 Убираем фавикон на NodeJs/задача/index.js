// Реализуйте описанную в видео процедуру, которая поможет избавится от двойного запроса.
'use strict'
let http = require('http');

http.createServer( (request, response) => {
  if (request.url != '/favicon.ico'){
    console.log(request.url);

    response.writeHead(200, {'Conten-Type': 'text/html'});
    response.write('ok!');
    response.end();
  }
}).listen(8888);
