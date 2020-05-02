// Дана функция getDigitsSum, которая параметром принимает целое число и возвращает сумму его цифр:
//
// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');
//
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}
//
// 	return sum;
// }
// С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых равна 13.

function getDigitsSum(num) {
	let sum = 0;
	let digits = String(num).split('');

	for (let digit of digits) {
		sum += Number(digit);
	}

	return sum;
}

let sumDate = 0;
for(let i= 1; i <= 2030; i++){

  if(getDigitsSum(i) == 13){
    sumDate += getDigitsSum(i);
  }
}

console.log(sumDate);
