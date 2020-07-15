// Дан массив с именами файлов. Переберите циклом эти имена и удалите соответствующие файлы из папки.
'use strict'
const fs = require('fs');
let arr = ['1.txt', '2.txt', '3.txt'];

for(let elem of arr){
  fs.unlink(elem, (err) => {
    if (err) throw err;
    console.log(elem + ' +');
  });
}
