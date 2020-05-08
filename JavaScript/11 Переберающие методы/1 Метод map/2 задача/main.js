// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
let arr = [ '1', '2', '3', '4' ];

let result = arr.map(function(elem){
  return elem + '!';
});

console.log(result);
