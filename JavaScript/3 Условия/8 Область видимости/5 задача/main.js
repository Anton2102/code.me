// Автор приведенного ниже кода хотел выполнить проверку возраста.
//
// Код, однако, при значение возраста большим 18 лет выводит в консоль значение undefined. Исправьте ошибку автора кода.
//
// Вот проблемный код:
//
// let age = 19;
// let result;
//
// if (age >= 18) {
// 	let result;
//
// 	if (age <= 23) {
// 		result = 'от 18 до 23';
// 	} else {
// 		result = 'больше 23';
// 	}
// } else {
// 	result = 'меньше 18';
// }
//
// console.log(result);

let age = 19;
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
