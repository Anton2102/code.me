// let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
// Запишите в новый объект те элементы, значения которых расположены в промежутке от 10 до 20.

let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
let newObj = {};

for(let key in obj){
  if(obj[key] >= 10 && obj[key] <= 20){
    newObj[key] = obj[key];
  }
}

console.log(newObj);
