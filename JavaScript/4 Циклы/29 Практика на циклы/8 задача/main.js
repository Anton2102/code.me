// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
let arr = [1,2,3,4,5,6,7];
let summ = 0;


for(let elem of arr){
  summ += elem;
}
console.log(summ);
