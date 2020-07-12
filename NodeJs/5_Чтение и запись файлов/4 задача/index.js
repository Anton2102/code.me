// Дан файл, текстом которого является строка из чисел, разделенных запятыми. Прочитайте этот файл, вычислите среднее арифметическое этих чисел и запишите результат в новый файл.
'use strict'
let fs = require('fs');

fs.readFile('readme.txt', 'utf8', (err, data) => {
  if(err) throw err;

  let arr = data.split(',');
  let summ = 0;
  for(let elem of arr){
    summ += Number(elem);
  }

  let result = summ/arr.length;

  fs.writeFile('result.txt', String(result), err => {
    if (err) throw err;
    console.log('complete!');
  });
});
