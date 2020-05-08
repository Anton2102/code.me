// Дан следующий массив:
//
// let arr = ['123', '456', '789'];
// Используя метод map преобразуйте этот массив в следующий:
//
// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];

let arr = ['123', '456', '789'];

let result = arr.map(function(elem){
  let arr = [];
  for(let i = 0; i < elem.length; i++){
    arr.push(elem[i]);
  }
  return arr;
});

console.log(result);
