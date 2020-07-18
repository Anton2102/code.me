// Разверните сервер NodeJS. Сделайте простой роутинг, описанный в предыдущем уроке. Модифицируйте этот роутинг так, чтобы обращение к любому другому URL, кроме заданного, выдавало текст 'страница не найдена' и статус 404.
'use strict'
let http = require('http');

http.createServer( (request, response) => {
  if (request.url != '/favicon.ico'){
    response.setHeader('Content-Type', 'text/html');

    let statusCode = 200;

    if (request.url == '/page1'){
      response.write('page1');
    } else if (request.url == '/page2'){
      response.write('page2');
    } else if (request.url == '/page3'){
      response.write('page3');
    } else {
      response.write('Page not found!');
      response.statusCode = 404;
    }
    response.statusCode = statusCode;
    response.end();
  }
}).listen(8888);
