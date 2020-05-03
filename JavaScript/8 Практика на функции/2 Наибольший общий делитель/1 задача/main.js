// Реализуйте функцию getGreatestCommonDivisor, которая параметрами будет принимать два числа и возвращать НОД этих двух чисел.
// При решении задачи старайтесь использовать вспомогательные функции, в том числе полученные нами ранее в теоретической части.
// Обязательно тестируйте каждую вспомогательную функцию перед использованием.

function getGreatestCommonDivisor(num1, num2){
  let arr1 = divisor(num1);
  let arr2 = divisor(num2);

  let elem = arr1.length - 1;

  for(let i = 0; i < arr1.length; i++){
    if(arr2.indexOf(arr1[elem]) != -1){
      return arr1[elem];
    } else {
      elem--;
    }
  }
}

function divisor(num){
  let result = [];
  for(let i = 1; i < num; i++){
    if(num % i == 0){
      result.push(i);
    }
  }
  return result;
}

console.log(getGreatestCommonDivisor(18, 12));
