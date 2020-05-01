// Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число. К примеру, если мы передадим число 24 - мы должны получить массив [1, 2, 3, 4, 6, 12, 24].
'use strict'

function getDivisors(num){
  let arr = [];
  for(let i = num; i > 0; i--){
    if(num % i === 0){
      arr.unshift(i);
    }
  }
  return arr;
}

console.log(getDivisors(10));
