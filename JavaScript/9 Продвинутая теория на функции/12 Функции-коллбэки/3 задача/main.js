// Дан массив с числами. С помощью созданной нами функции each найдите произведение каждого элемента массива на его порядковый номер.

function composition(elem, i){
  return elem * i;
}

function each(arr, callback){
  let result = [];
  let i = 0;
  for(let elem of arr){
    result.push(callback(elem, i++));
  }
  return result;
}

console.log(each([1, 2, 3, 4, 5], composition));
