// Дан следующий массив:
//
// let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
// Найдите сумму всех элементов приведенного массива.

let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
let summ = 0;

for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr[i].length; j++){
    for(let x = 0; x < arr[i][j].length; x++){
      for(let s = 0; s < arr[i][j][x].length; s++){
        summ += arr[i][j][x][s];
      }
    }
  }
}

console.log(summ);
