// Автор следующего кода хотел записать в новый массив только нечетные элементы старого массива:
//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// for (let elem of arr) {
// 	if (elem % 2 != 0) {
// 		result.push(elem);
// 	}
// }
//
// console.log(result);
// Написанный код, однако, выдает ошибку в консоль. Исправьте ошибку автора.


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = [];

for (let elem of arr) {
	if (elem % 2 != 0) {
		result.push(elem);
	}
}

console.log(result);
