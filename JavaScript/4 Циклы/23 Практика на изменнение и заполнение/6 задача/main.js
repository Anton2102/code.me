// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2.
//
// То есть у вас в результате получится вот такой массив:
//
// let arr = [
// 	125,
// 	225,
// 	128,
// 	145,
// 	281,
// ];

let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
let arr = [];

for(let key in obj){
  let elem = String(obj[key]);
  if(elem[0] === '1' || elem[0] === '2'){
    arr.push(obj[key]);
  }
}

console.log(arr);
