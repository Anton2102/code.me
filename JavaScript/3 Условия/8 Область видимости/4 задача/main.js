// Автор приведенного ниже кода хотел выполнить проверку возраста.
//
// Код, однако, при любом значение возраста выводит в консоль значение undefined. Исправьте ошибку автора кода.
//
// Вот проблемный код:
//
// let age = 17;
// let result;
//
// if (age >= 18) {
// 	if (age <= 23) {
// 		let result = 'от 18 до 23';
// 	} else {
// 		let result = 'больше 23';
// 	}
// } else {
// 	let result = 'меньше 18';
// }
//
// console.log(result);

let age = 17;
let result;

if (age >= 18) {
	if (age <= 23) {
		result = 'от 18 до 23';
	} else {
		result = 'больше 23';
	}
} else {
	result = 'меньше 18';
}

console.log(result);
