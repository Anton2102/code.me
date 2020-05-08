// Дан массив с числами. Оставьте в нем только положительные числа.
let arr = [ 1, 2, 3, -2, 4, 5 ];

let result = arr.filter(elem => { return elem > 0 });

console.log(result);
