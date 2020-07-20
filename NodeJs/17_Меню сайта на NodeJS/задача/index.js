// Разбейте страницы вашего сайта, созданного в предыдущем уроке, на HTML блоки, а также добавьте меню вашему сайту.
'use strict'

const fs = require('fs');
const http = require('http');

http.createServer( (request, response) => {
  if (request.url != '/favicon.ico'){

    let name;
    if (request.url == '/'){
      name = 'index';
    } else {
      name = request.url;
    }

    response.setHeader('Content-Type', 'text/html');
    fs.readFile('pages/' + name + '.html', (err, data) => {
      if (!err){
        response.statusCode = 200;
        response.write(data);
        response.end();
      } else {
        fs.readFile('pages/404.html', (err, data) => {
          if (err) throw err;

          response.statusCode = 404;
          response.write(data);
          response.end();
        });
      }
    });

  }
}).listen(8888);
