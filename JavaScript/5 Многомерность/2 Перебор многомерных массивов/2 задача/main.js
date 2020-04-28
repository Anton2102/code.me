// Дан трехмерный массив с числами:
//
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// С помощью вложенных циклов найдите сумму элементов этого массива.

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let summ = 0;

for(let elem1 of arr){
  for(let elem2 of elem1){
    for(let elem3 of elem2){
      summ += elem3;
    }
  }
}

console.log(summ);
