// Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
let arr = [-2,-5,2,0,9,1];
let arrNew = [];

for(let elem of arr){
  if(elem > -1){
    arrNew.push(elem);
  }
}

console.log(arrNew);
