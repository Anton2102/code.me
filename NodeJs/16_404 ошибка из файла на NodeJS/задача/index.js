// Модифицируйте решение задачи предыдущего урока так, чтобы при обращении к несуществующей странице, выдавалась страница с ошибкой и статусом 404.
'use strict'

const fs = require('fs');
const http = require('http');

http.createServer( (request, response) => {
  if(request.url != '/favicon.ico'){

    fs.readFile('pages/' + request.url + '.html', (err, data) => {
      response.setHeader('Conten-Type', 'text/html');

      if(!err){
        response.statusCode = 200;
        response.write(data);
        response.end();
      } else {
        fs.readFile('pages/404.html', (err, data) => {
          response.statusCode = 404;
          response.write(data);
          response.end();
        });
      }

    });
  }
}).listen(8888);
