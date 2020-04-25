// Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
let arr = [1,2,3,4,5];
let result = 0;

for(let elem of arr){
  result += elem;
}

console.log(result/arr.length);
