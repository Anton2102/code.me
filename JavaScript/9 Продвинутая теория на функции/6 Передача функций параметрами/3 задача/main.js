// Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа.
//
// Пусть функция test возвращает сумму результатов переданных функций:
//
// function test(num, func1, func2) {
// 	return func1(num) + func2(num);
// }
// Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы на экран.

let num = 2;

function test(num, func1, func2) {
	return func1(num) + func2(num);
}

function func1(num){
  return num ** 2;
}

function func2(num){
  return num ** 3;
}

console.log(test(num, func1, func2));
