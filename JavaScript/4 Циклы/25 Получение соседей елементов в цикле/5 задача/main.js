// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите сумму предыдущего, текущего и следующего элементов массива.
let arr = [1,2,3,4,5];

for(let i = 1; i < arr.length - 1; i++){
  console.log((arr[i] - 1) + arr[i] + (arr[i] + 1));
}
