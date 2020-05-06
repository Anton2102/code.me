// Вызовите созданную вами функцию test, передав ей параметром массив с числами. Сделайте так, чтобы функция вернула массив с кубами этих чисел.

let arr = [1, 2, 3, 4, 5];

function test(arr, func1){
  let result = [];
  for(let elem of arr){
    result.push(func1(elem));
  }
  return result;
}

function numberSquare(elem){
  return elem ** 2;
}

console.log(test(arr, numberSquare));
