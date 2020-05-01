//        ЗАДАЧА 5      //
// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:
//
// function sqrt(num) {
// 	return Math.sqrt(num);
// }
//
// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.

//      ЗАДАЧА 6      //
// Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:
//
// function round(num) {
// 	return num.toFixed(3);
// }
// С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась дробь, округленная до 3-х знаков в дробной части.

function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

function round(num) {
	return num.toFixed(3);
}

let result = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(result);
