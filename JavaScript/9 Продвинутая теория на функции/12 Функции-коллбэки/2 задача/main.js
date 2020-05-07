// Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.
let arrStr = ['привет', ',', 'как', 'у', 'тебя', 'дела', '?'];

function symbolToUpperCase(str){
  return str[0].toUpperCase() + str.slice(1);
}

function each(arr, callback){
  let result = [];
  for(let elem of arr){
    result.push(callback(elem));
  }
  return result;
}

console.log(each(arrStr, symbolToUpperCase));
