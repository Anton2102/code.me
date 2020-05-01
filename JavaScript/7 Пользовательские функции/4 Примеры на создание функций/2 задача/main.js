// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром будет принимать целое число и возвращать сумму его цифр.

function getDigitsSum(num){
  let sum = 0;

  for(let i = num; i > 0; i--){
    sum += i;
  }

  return sum;
}

console.log(getDigitsSum(5));
