// 1 задача // Реализуйте функцию getOwnDivisors. Потестируйте ее работу.
// 2 задача // Реализуйте функцию getSum. Потестируйте ее работу.
// 3 задача // Проверьте работу функции isFreindly.

function isFreindly(num1, num2) {
	let sum1 = getSum(getOwnDivisors(num1));
	let sum2 = getSum(getOwnDivisors(num2));

	if (sum1 == num2 && sum2 == num1) {
		return true;
	} else {
		return false;
	}
}

function getOwnDivisors(num) {
	let result = [];
  for(let i = 1; i < num; i++){
    if(num % i == 0){
      result.push(i);
    }
  }
  console.log(result);
  return result;
}

function getSum(arr) {
  let sum = 0;
	for(let elem of arr){
    sum += elem;
  }
  return sum;
}

console.log(isFreindly(220,284));
