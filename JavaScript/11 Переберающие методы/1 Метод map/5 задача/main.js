// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.
let arr = [ 1, 2, 3, 4, 5, 6 ];

let result = arr.map(function(elem, index){
  return elem * index;
});

console.log(result);
