// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите произведение элементов этого массива.
let arr = [1,2,3,4,5];
let result;
for(let i = 0; i < arr.length; i++){
  if(result == undefined){
    result = arr[i];
  } else result *= arr[i];
}
console.log(result);
