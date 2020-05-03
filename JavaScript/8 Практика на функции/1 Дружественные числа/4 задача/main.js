// Совершенное число - целое число, равное сумме всех своих собственных делителей (то есть всех положительных делителей, отличных от самого числа). Сделайте функцию getPerfect, которая будет находить совершенные числа в заданном диапазоне. Проверьте работу функции в промежутке от 1 до 1000.

function getPerfect(min,max){
  let result = [];
  for(let i = min; i <= max; i++){
    if(chekPerfect(i) == i){
      result.push(i)
    }
  }
  return result;
}

function chekPerfect(num){
  let sum = 0;
  for(let i = 1; i < num; i++){
    if(num % i == 0){
      sum += i;
    }
  }
  return sum;
}

console.log(getPerfect(1, 1000));
