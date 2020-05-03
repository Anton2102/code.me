// Сделайте функцию getSimpleDivisors, которая будет принимать параметром целое число и находить все делители этого числа, являющиеся простыми числами.

function getSimpleDivisors(num){
  let result = [];
  for(let i = 1; i < num; i++){
    if(checkSimpleNum(i)){
      result.push(i);
    }
  }
  return result;
}

function checkSimpleNum(num){
  for(let i = num; i > 0; i--){
    if(num % 2 == 0){
      return false;
    } else {
      return true;
    }
  }
}

console.log(getSimpleDivisors(40));
