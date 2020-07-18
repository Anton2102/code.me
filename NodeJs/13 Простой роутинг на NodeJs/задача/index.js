// Разверните сервер NodeJS. С помощью нескольких ифов сделайте так, чтобы по заходу на страницу /page1/ в браузере показывался текст 'первая страница', по заходу на страницу /page2/ - текст 'вторая страница', а по заходу на /page3/ - текст 'третья страница'.
'use strict'
let http = require('http');

http.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});

  if (request.url == '/page1/'){
    response.write('One page!');
  } else if(request.url == '/page2/'){
    response.write('Two page!');
  } else if(request.url == '/page3/'){
    response.write('Three page!');
  }

  response.end();
}).listen(8888);
