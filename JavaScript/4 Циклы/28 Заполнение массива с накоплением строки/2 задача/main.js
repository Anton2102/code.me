// С помощью цикла сформируйте следующий массив:
//
// ['11111', '22222', '33333', '44444', '55555']

let arr = [];

for(let i = 1; i <= 5; i++){
  let elem = String(i);
  for(let j = 0; j < 5; j++){
    elem += i;
  }
  arr.push(elem);
}
console.log(arr);
