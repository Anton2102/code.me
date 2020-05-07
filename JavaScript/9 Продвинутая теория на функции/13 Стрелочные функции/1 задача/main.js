// Дана следующая функция с коллбэком:
//
// let result = every([1, 2, 3, 4, 5], function(elem) {
// 	if (elem > 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// Упростите коллбэк через стрелочную функцию.

let result = every([1, 2, 3, -2, 4, 5], elem => elem > 0);

function every(arr, callback){
  let result = [];
  for(let elem of arr){
    if(callback(elem)){
      result.push(elem);
    }
  }
  return result;
}

console.log(result);
