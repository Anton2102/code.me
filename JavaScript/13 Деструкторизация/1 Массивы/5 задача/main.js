// В следующем коде части массива записываются в соответствующие переменные:
//
// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];
//
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
//
// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'джуниор';
// }
// Переделайте этот код через деструктуризацию согласно изученной теории.

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];

let [name, surname, department, position = 'джуниор'] = arr;

console.log(name, surname,position);
