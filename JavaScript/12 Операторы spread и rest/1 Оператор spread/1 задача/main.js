// Дан массив:
//
// let arr = [1, 2, 3, 4, 5];
// Дана также функция:
//
// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }
// Найдите с помощью приведенной функции сумму элементов массива.

let arr = [1, 2, 3, 4, 5];

function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}

console.log(func(...arr));
