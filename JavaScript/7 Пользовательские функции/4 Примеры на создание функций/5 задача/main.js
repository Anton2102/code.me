// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
//
// Пример работы такой функции:
//
// console.log(func(5)); // выведет [1, 2, 3, 4, 5]

function pushArr(num){
  let arr = [];

  for(let i = num; i > 0; i--){
    arr.unshift(i);
  }

  return arr;
}

console.log(pushArr(4));
