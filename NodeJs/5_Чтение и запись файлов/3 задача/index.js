// Дан файл, текстом которого является число. Прочитайте этот файл, вычислите квадрат этого числа и запишите этот квадрат обратно в файл.
'use strict'
let fs = require('fs');

fs.readFile('readme.txt', 'utf8', (err, data) => {
  if (err) throw err;
  // let numFile = data * data;

  fs.writeFile('readme.txt', data ** 2, err => {
    console.log('complete!');
  });
});
