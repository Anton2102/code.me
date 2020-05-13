// В следующем коде части массива записываются в соответствующие переменные:
//
// function func() {
// 	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// }
//
// let arr = func();
//
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переделайте этот код через деструктуризацию согласно изученной теории.

function func() {
	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}

let [name, surname, department, position, salary] = func();
console.log(name, surname, department, position, salary);
