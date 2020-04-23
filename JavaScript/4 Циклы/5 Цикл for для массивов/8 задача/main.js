// Дан массив arr. Найдите среднее арифметическое его элементов (сумма делить на количество). Проверьте задачу на массиве с элементами 1, 2, 3, 4, 5.
let arr = [1,2,3,4,5];
let result = 0;
for(let i = 0; i < arr.length; i++){
  result += arr[i];
}
console.log(result / arr.length);
