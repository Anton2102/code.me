// Дан текстовый файл. Очистите его содержимое.
'use strict'
const fs = require('fs');

fs.truncate('readme.txt', (err) => {
  if (err) throw err;
  console.log('+');
});
