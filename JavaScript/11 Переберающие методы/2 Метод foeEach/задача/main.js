// Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.
let arr = [ 1, 2, 3, 4, 5 ];
let sum = 0;

arr.forEach((elem) => {
  sum += elem ** 2;
});

console.log(sum);
