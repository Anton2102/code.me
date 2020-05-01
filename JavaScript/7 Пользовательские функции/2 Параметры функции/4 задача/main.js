// Сделайте функцию func, которая параметром будет принимать 3 числа и выводить на экран их сумму.
//
// Пусть даны 3 переменные с числами:
//
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// С помощью созданной вами функции выведите на экран сумму значений эти переменных.

let param1 = 1;
let param2 = 2;
let param3 = 3;

function summNum(num1,num2,num3){
  return(num1 + num2 + num3);
}

console.log(summNum(param1,param2,param3));
