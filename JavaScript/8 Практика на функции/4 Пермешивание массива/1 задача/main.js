// Сделайте функцию range принимающую параметрами 2 целых числа - начало и конец диапазона, и возвращающую массив, заполненный целыми числами из этого диапазона.

let arr = [1, 2, 3, 4, 5];

function range(arr, min,max) {
  let result = [];
  for(let i = min; i <= max; i++){
    result.push(arr[getRandomInt(min,max)]);
  }
  return result;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(range(arr, 1, 3));
