// Дан следующий объект:
//
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// Запишите ключи этого объекта в один массив, а значения - в другой.

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

let keys = [], values = [];

for(let key in obj){
  keys.push(key);
  values.push(obj[key]);
}

console.log(keys,values);
