// Дан двухмерный массив с числами:
//
// let arr = [[1, 2, 3], [4, 5], [6]];
// С помощью вложенных циклов найдите сумму элементов этого массива.

let arr = [[1, 2, 3], [4, 5], [6]];
let summ = 0;

for(let arr1 of arr){
  for(let arr2 of arr1){
    summ += arr2;
  }
}

console.log(summ);
