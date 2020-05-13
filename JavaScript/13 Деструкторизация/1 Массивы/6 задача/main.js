// function func() {
//   return (new Date).getDate();
// }
//
// let [year, month, day = func()] = arr;
// Модифицируйте полученный выше код так, чтобы при отсутствии в массиве значения для месяца по умолчанию брался текущий месяц, а при отсутствии значения для года - соответственно текущий год.
let arr = [];

function func() {
	return (new Date).getDate();
}
function func1() {
  return (new Date).getMonth() + 1;
}
function func2(){
  return (new Date()).getFullYear();
}

let [year = func2(), month = func1(), day = func()] = arr;

console.log(year, month, day);
