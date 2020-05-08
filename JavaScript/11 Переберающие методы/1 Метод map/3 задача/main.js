// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
let arr = [ '123', 'привет', 'пока', 'что-то!' ];

let result = arr.map(function(elem){
  return elem.split('').reverse().join('');
});

console.log(result);
