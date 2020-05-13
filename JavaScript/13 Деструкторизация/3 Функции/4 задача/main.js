// Переделайте следующий код через деструктуризацию согласно изученной теории:
//
// function func(department, employee, hired) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
//
// 	let year  = hired[0];
// 	let month = hired[1];
// 	let day   = hired[2];
// }
//
// func( 'отдел разработки', ['Иван', 'Иванов'], '2018-12-31' );

function func(department, [name, surname], hired) {
	console.log(name, surname);
  let date = new Date(hired);
  console.log(date);

	let year  = date.getFullYear();
	let month = date.getMonth();
	let day   = date.getDate();
  console.log(year, month, day);
}

func( 'отдел разработки', ['Иван', 'Иванов'], '2018-12-31' );
