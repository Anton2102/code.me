// Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

console.log(arr.filter((elem, index) => {return elem * index < 30 }));
