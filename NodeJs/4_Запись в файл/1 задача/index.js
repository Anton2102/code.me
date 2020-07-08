// В переменной хранится текст. Запишите его в файл.
'use strict'
let str = 'текст';
let fs = require('fs');

fs.writeFile('main.txt', str, err => {
  console.log('Запись прошла успешно!');
});
