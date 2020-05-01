// Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.
let arr = [1,2,34,5,6,7,7,8,9];

function checkArr(arr){
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] == arr[i + 1]){
      return false;
    }
  }

  return true;
}

console.log(checkArr(arr));
