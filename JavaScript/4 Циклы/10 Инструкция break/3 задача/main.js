// Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).
let arr = [1,2,3,4,5];
for(let i = 0; i < arr.length; i++){
  if(arr[i] == 3){
    console.log('Позиция: ' + i);
    break;
  }
}
