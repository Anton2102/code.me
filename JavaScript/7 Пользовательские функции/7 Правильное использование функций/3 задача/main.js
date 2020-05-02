// Пусть дан какой-то массив с числами, например, такой:
//
// [123, 456, 789]
// Давайте сделаем так, чтобы цифры в каждом элементе массива были в обратном порядке. То есть из нашего массива сделаем следующий:
//
// [321, 654, 987]
// Некий программист уже написал код, реализующий описанную задачу:
//
// let nums = [123, 456, 789];
//
// let result = [];
// for (let num of nums) {
// 	result.push(String(num).split('').reverse().join(''));
// }
//
// console.log(result); // выведет [321, 654, 987]
// Переделайте приведенный код так, чтобы переворот числа выполняла отдельная функция.

let nums = [123, 456, 789];

let result = [];
for (let num of nums) {
  result.push(arrNumberReverse(num));
}

function arrNumberReverse(num){
  return String(num).split('').reverse().join('');
}

console.log(result); // выведет [321, 654, 987]
