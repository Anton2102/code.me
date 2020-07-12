// Даны два файла. Прочитайте текст из первого файла и запишите его во второй.
'use strict'
let fs = require('fs');

fs.readFile('readme.txt', 'utf8', (err, data) => {
  if (err) throw err;

  fs.writeFile('write.txt', data, err => {
    if (err) throw err;
    console.log('complete!');
  })
});
