// Дан объект следующий объект:
//
// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// С помощью цикла for-in найдите сумму элементов этого объекта.

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let result = 0;

for(let key in obj){
  result += obj[key];
}
console.log(result);
