// Сформируйте с помощью трех вложенных циклов следующий массив:
//
// [
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// ]

let arr = [];

for(let i = 0; i < 3; i++){
  arr[i] = [];
  for(let j = 0; j < 2; j++){
    arr[i][j] = [];
    for(let x = 0; x < 5; x++){
      arr[i][j][x] = x + 1;
    }
  }
}

console.log(arr);
