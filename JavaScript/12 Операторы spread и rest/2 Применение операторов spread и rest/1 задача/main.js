// Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое (сумма делить на количество).
let result = function(...rest){
  let sum = 0;
  for(let elem of rest){
    sum += elem;
  }
  return sum/rest.length;
}

console.log(result(1, 2, 3));
