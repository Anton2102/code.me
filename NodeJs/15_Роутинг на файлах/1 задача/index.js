// Пусть у нас есть какой-то файл с HTML страницей (с доктайпом, тегами head, body и тп). Разверните NodeJS сервер, который при обращении к любому URL будет отдавать эту HTML страницу.
'use strcit'

const fs = require('fs');
const http = require('http');

http.createServer( (request, response) => {
  // console.log(request.url);
  if (request.url != '/favicon.ico'){

    fs.readFile('list/' + request.url + '.html', (err, data) => {
      response.setHeader('Content-Type', 'text/html');
      // console.log(data);

      // let statusCode = 200;
      if(!err){
        response.statusCode = 200;
        response.write(data);
      } else {
        response.statusCode = 404;
        response.write('page not found!');
      }
      // response.statusCode = statusCode;
      response.end();
    });
  }
}).listen(8888);
