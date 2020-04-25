// Дан следующий массив:
//
// let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:
//
// let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

let arr = ['a', 'b', 'c', 'd', 'e'];

let obj = {};

for(let i = 0; i < arr.length; i++){
  obj[i + 1] = arr[i];
}

console.log(obj);
