// С помощью цикла сформируйте следующий массив:
//
// ['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx']

let str = 'xx';
let elem = '';
let arr = [];

for(let i = 0 ; i < 5; i++){
  elem += str;
  arr.push(elem);
}

console.log(arr);
