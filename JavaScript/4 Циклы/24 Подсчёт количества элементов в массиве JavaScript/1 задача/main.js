// Дан следующий массив:
//
// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];

let count = 0;
for(let elem of arr){
  if(elem === 3){
    count++;
  }
}
console.log(count);
