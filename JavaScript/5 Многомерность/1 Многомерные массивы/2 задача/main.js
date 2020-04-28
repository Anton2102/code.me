// Дан следующий массив:
//
// let arr = [[1, 2], [3, 4], [5, 6]];
// Найдите сумму всех его элементов.

let arr = [[1, 2], [3, 4], [5, 6]];
let summ = 0;

for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr[i].length; j++){
    summ += arr[i][j];
  }
}

console.log(summ);
