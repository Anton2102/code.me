// Даны следующий массив:
//
// let arr = ['a', 'b', 'c', 'd', 'e'];
// Описанным способом сделайте из него массив:
//
// let arr = ['e', 'd', 'c', 'b', 'a'];

let arr = ['a', 'b', 'c', 'd', 'e'];
let newArr = [];

for(let i = arr.length - 1; i >= 0; i--){
  newArr.push(arr[i]);
}

console.log(newArr);
