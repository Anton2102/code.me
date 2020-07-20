'use strict'

let fs = require('fs');
let http = require('http');

http.createServer( (request, response) => {
  if (request.url != '/favicon.ico'){

    if (request.url.endsWith('.css')) {
      fs.readFile('style.css', (err, data) => {
        if (err) throw err;

        response.setHeader('Content-Type', 'text/css');
        response.statusCode = 200;
        response.write(data);
        response.end();
      });
    } else {
      getPage(request.url, response);
    }
  }
}).listen(8888);

function getPage(name, response, statusCode = 200) {
  if (name == '/'){
    name = 'index';
  }

  fs.readFile('pages/' + name + '.html', 'utf8', (err, data) => {
    if (err) throw err;
    if (!err) {

      fs.readFile('pages/menu.html', 'utf8', (err, menu) => {
        if (err) throw err;
        data = data.replace(/\{\{menu\}\}/g, menu);

        fs.readFile('pages/footer.html', 'utf8', (err, footer) => {
          if (err) throw err;

          data = data.replace(/\{\{footer\}\}/g, footer);

          response.setHeader('Content-Type', 'text/html');
          response.statusCode = statusCode;
          response.write(data);
          response.end();
        });
      });

    }
  });
}
