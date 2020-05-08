// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
let arr = [0, -5, -2, 1];

console.log('Положительных чисел: ' + arr.filter(elem => { return elem > 0}).length);
console.log('Отрицательных чисел: ' + arr.filter(elem => { return elem < 0}).length);
