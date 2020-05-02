// Дана функция, проверяющая числа на простоту:
//
// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
//
// 	return true;
// }
// С помощью приведенной функции найдите все простые числа в интервале от 1 до 100.

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}

	return true;
}

for(let i = 1; i <= 100; i++){
  if(isPrime(i)){
    console.log(i);
  }
}
