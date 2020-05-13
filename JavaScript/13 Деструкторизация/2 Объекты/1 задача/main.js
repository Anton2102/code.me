// В следующем коде части объекта записываются в соответствующие переменные:
//
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
//
// let color  = options.color;
// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.

let options = {
	color: 'red',
	width:  400,
	height: 500,
};

let {color, width, height} = options;

console.log(color, width, height);
