// Модифицируйте предыдущую задачу так, чтобы в одном цикле одновременно подсчитывалось и количество троек, и количество двоек.
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];

let count2 = 0, count3 = 0;
for(let elem of arr){
  if(elem === 3){
    count3++;
  } else if(elem === 2){
    count2++;
  }
}
console.log(count2,count3);
