// Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.
let arr = [1,2,3,4,5-7,2,1];
let result = 0;

for(let elem of arr){
  if(elem < 0){
    break;
  } else{
    result += elem;
  }
}

console.log(result);
