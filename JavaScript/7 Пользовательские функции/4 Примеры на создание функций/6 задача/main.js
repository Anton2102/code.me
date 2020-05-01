// Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел.
//
// Пример работы такой функции:
//
// console.log(func(3, 7)); // выведет [3, 4, 5, 6, 7]

function pushArr(min, max){
  let arr = [];

  for(let i = min; i <= max; i++){
    arr.push(i);
  }

  return arr;
}

console.log(pushArr(3,7));
