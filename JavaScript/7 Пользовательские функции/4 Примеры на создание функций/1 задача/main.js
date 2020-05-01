// Напишите функцию, которая будет находить сумму квадратов элементов массива.
let arr = [1,2,3,4,5];

function sumSqrt(arr){
  let summ = 0;

  for(let elem of arr){
    summ += Math.sqrt(elem);
  }
  return summ;
}

console.log(sumSqrt(arr));
