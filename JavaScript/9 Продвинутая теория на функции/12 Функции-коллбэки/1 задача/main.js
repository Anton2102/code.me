// Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.

function reverseStr(str){
  return str.split('').reverse().join('');
};

function each(arr, callback){
  let result = [];

  for(let elem of arr){
    result.push(callback(elem));
  }
  return result;
}

let arrStr = ['12', '13', '14', '15'];
console.log(each(arrStr, reverseStr));
