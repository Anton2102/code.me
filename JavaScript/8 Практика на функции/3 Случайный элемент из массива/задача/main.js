// Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию. При решении задачи код функции getRandomInt скопируйте из учебника.
// Используя созданную функцию, найдите сумму трех случайных элементов из массива.

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random(arr) {
	return arr[getRandomInt(0, arr.length - 1)];
}

function sumResult(arr){
  let sum = 0;
  for(let i = 0; i < 3; i++){
    sum += arr[random(arr) - 1];
  }
  return sum;
}

let arr = [1, 2, 3, 4, 5];
console.log('Сумма: ' + sumResult(arr));
