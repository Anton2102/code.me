// Автор следующего кода хотел сделать двухмерный массив:
//
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = '';
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];

	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
