// Переделайте следующий код через деструктуризацию согласно изученной теории:
//
// function func(employee) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
// 	let info     = employee.slice(2);
// }
//
// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

function func([name, surname, ...rest]) {
	console.log(name);
  console.log(surname);
  console.log(rest);
}

func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );
