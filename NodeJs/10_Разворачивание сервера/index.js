//1 задача//Разверните сервер, который будет доступен по адресу http://localhost:8888. Сделайте так, чтобы по заходу на этот адрес в браузере появлялся текст '!!!'.
//2 задача //При обращении к серверу NodeJS в качестве ответа сервера с помощью метода writeHead установите заголовок Content-Type в значение text/html, а статус ответа в 200.
//3 задача //При обращении к серверу NodeJS в качестве ответа сервера с помощью метода writeHead установите одновременно заголовок Content-Type в значение text/json, а заголовок X-Powered-By в значение myHeader. Статус ответа при этом сделайте 200.
//4 задача //При обращении к серверу NodeJS в качестве ответа сервера с помощью метода setHeader установите заголовок Content-Type в значение text/html.
'use strict'
const http = require('http');

http.createServer(function(request, response){
  // response.writeHead(200, {'Content-Type': 'text/html'});
  response.writeHead(200, {'Content-Type': 'text/json', 'X-Powered-By': 'myHeader'});
  // response.write('!!!');
  response.setHeader = 'Content-Type: text/html';
  response.write('myHeader');
  response.end();
}).listen(8888);
