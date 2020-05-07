// Дана следующая функция с коллбэком:
//
// let result = every([1, 2, 3, 4, 5], function(elem, index) {
// 	if (elem * index > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// Упростите коллбэк через стрелочную функцию.

let result = every([1, 2, 3, 4, 5], (elem,index) => elem * index > 10);

function every(arr, callback){
  let result = [];
  let index = 0;
  for(let elem of arr){
    if(callback(elem, index++)){
      result.push(elem);
    }
  }
  return result;
}

console.log(result);
