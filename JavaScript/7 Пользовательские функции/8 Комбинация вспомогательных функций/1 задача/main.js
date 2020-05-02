// Дана функция getSum, находящая сумму элементов переданного массива:
//
// function getSum(arr) {
// 	let sum = 0;
//
// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}
//
// 	return sum;
// }
// Дана функция getDigits, возвращающая массив цифр числа:
//
// function getDigits(num) {
// 	return String(num).split('');
// }
// Используя комбинацию приведенных функций найдите сумму цифр числа 12345.

function getSum(arr) {
	let sum = 0;

	for (let elem of arr) {
		sum += Number(elem);
	}

	return sum;
}

function getDigits(num) {
	return String(num).split('');
}

console.log(getSum(getDigits(12345)));
