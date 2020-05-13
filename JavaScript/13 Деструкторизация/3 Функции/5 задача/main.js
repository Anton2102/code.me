// Переделайте следующий код через деструктуризацию согласно изученной теории:
//
// function func(options) {
// 	let color  = options.color;
// 	let width  = options.width;
// 	let height = options.height;
// }
//
// func( {color: 'red', width: 400, height: 500} );

function func({color, width, height}) {
	console.log(color, width, height);
}

func( {color: 'red', width: 400, height: 500} );
