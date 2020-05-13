// Переделайте следующий код через деструктуризацию согласно изученной теории:
//
// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
// 	let position   = employee[3];
// 	let salary     = employee[4];
// }
//
// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

function func([name, surname, department, position, salary]) {
	console.log(name);
  console.log(surname);
  console.log(department);
  console.log(position);
  console.log(salary);
}

func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );
