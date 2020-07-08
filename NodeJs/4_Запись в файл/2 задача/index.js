// Дан массив с именами файлов. Переберите его циклом и создайте файлы с такими именами и пустым текстом.
'use strict'
let arr = ['1.txt', '2.txt', '3.txt'];
let fs = require('fs');

for(let elem of arr){
  fs.writeFile(elem, '', resolve => {
    console.log(elem);
  });
}
