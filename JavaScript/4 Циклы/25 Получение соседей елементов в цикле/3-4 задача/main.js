// 1  // Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите два предыдущих элемента массива.
// 2  // Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма двух предыдущих элементов и текущего элемента массива.
let arr = [1,2,3,4,5];

for(let i = 2; i < arr.length; i++){
  console.log(arr[i] + arr[i] - 1 + arr[i] - 2);
}
