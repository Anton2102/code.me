// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
let arr = [4, -2, 5, 19, -130, 0, 10];
console.log(Math.max.apply(null, arr), Math.min.apply(null, arr));
