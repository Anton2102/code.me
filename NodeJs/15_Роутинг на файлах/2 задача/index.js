// Пусть у нас есть несколько HTML файлов. Пусть их имена page1.html, page2.html и page3.html. С помощью нескольких ифов сделайте так, чтобы по заходу на URL /page1/ в браузере показывался текст страницы page1.html, по заходу на URL /page2/ показывался текст страницы page2.html и так далее.
// Таким образом у вас получится сайт с несколькими страницами. Этот сайт мы будем модифицировать в следующих уроках, не удаляйте его код.
'use strict'

const fs = require('fs');
const http = require('http');

http.createServer( (request, response) => {
  if (request.url != '/favicon.ico'){
    fs.readFile('pages/' + request.url + '.html', (err, data) => {
      if (!err) {
        response.statusCode = 200;
        response.write(data);
      } else {
        response.statusCode = 404;
        response.write('page not dafault');
      }
      response.end();
    });
  }
}).listen(8888);
