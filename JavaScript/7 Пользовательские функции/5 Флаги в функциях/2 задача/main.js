// Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.

let arr = [ 1, 3, 5, 7, 241 ];

function checkArr(arr){
  for(let elem of arr){
    if(elem % 2 == 0){
      return false;
    }
  }

  return true;
}

console.log(checkArr(arr));
