// Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while).
let arr = [];
for(let i = 0; i < 10; i++){
  arr.push(Math.floor(Math.random() * 10));
}

console.log(arr);
