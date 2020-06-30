// Сделайте файл-модуль math.js, в котором будет лежать функция square, возводящая число в квадрат. В файле index.js экспортируйте модуль math.js, и с его помощью возведите число в квадрат.
//Модифицируйте предыдущую задачу так, в файле-модуле хранилось 3 функции: возводящая в квадрат, возводящая в куб и возводящая в четвертую степень. Экспортируйте все эти функции в файле index.js и с их помощью возведите числа с разные степени.
'use strict'

function square(num){
  return num ** 2;
}

function cube(num){
  return num ** 3;
}

function fourth(num){
  return num ** 4;
}

exports.square = square;
exports.cube = cube;
exports.fourth = fourth;
