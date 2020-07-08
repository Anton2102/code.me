// Дана строка:
// let str = 'a1b c34d x567z';
// Найдите сумму всех чисел этой строки.
let str = 'a1b c34d x567z';
let nums = str.match(/\d/g);
let result = [];
for(let num of nums){
  result.push(num);
}
console.log(result);
