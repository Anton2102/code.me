// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите сумму квадратов элементов этого массива.
let arr = [1,2,3,4,5];
let result = 0;
for(let i = 0; i < arr.length; i++){
  result += arr[i] * arr[i];
}
console.log(result);
