      // 4 задача //
// Реализуйте функцию filter, которая будет осуществлять фильтрацию массива. Пусть первым параметром функция принимает массив, а вторым - функцию-коллбэк, и возвращает массив элементов, для которых функция-коллбэк вернет true.
//
// Пример работы такой функции (оставим в массиве только четные числа):
//
// let result = filter([1, 2, 3, 4, 5], function(elem) {
// 	if (elem % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
//
// console.log(result); // выведет [2, 4]
// Пусть в первый параметр коллбэка попадает элемент массива, а во второй - его номер.

// 5 задача // Дан массив с числами. С помощью созданной нами функции filter оставьте в этом массиве только положительные числа.

// 6 задача // Дан массив со строками. С помощью созданной нами функции filter оставьте в этом массиве только строки, длина которых от 1 до 3 символов.

let arr = [1, 2, 3, 4, 5, 6];
let arr2 = ['', '1', '12', '123', '1234', '12345'];

function checkEven(elem){
  if(elem % 2 == 0){
    return true;
  } else {
    return false;
  }
}

function checkPlus(elem){
  if(elem >= 0){
    return true;
  } else {
    return false;
  }
}

function checkStrLength(str){
  if(str.length >= 1 && str.length <=3){
    return true;
  } else {
    return false;
  }
}

function filter(arr, callback){
  let result = [];
  for(let elem of arr){
    if(callback(elem)){
      result.push(elem);
    }
  }
  return result;
}

console.log(filter(arr, checkEven));
console.log(filter(arr, checkPlus));
console.log(filter(arr2, checkStrLength));
