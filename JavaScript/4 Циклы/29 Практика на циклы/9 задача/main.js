// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
let arr = [1,2,3,4,5];
let summ = 0;

for(let elem of arr){
  summ += elem * elem;
}

console.log(summ);
