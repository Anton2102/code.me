// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.

let arr = [ 2, 4, 6, 8, 241 ];

function checkArr(arr){
  for(let elem of arr){
    if(elem % 2 != 0){
      return false;
    }
  }

  return true;
}

console.log(checkArr(arr));
