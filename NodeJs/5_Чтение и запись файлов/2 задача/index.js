// Дан файл с текстом. Запишите ему в конец еще какой-нибудь текст.
'use strict'
let fs = require('fs');

fs.readFile('readme.txt', 'utf8', (err, data) => {
  if(err) throw err;

  fs.writeFile('readme.txt', data + '!', err => {
    console.log('complete!');
  });
});
