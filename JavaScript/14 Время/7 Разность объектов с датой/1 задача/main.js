// Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.
let date1 = new Date(2000, 7, 1);
let date2 = new Date(2010, 1, 15);

let diff = date2 - date1;
console.log(diff + ' миллисекунд');

//2 задача
// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в днях.
console.log(diff/(1000 * 60 * 60 * 24) + ' дня');

//3 задача
// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в месяцах.
console.log(diff/(1000 * 60 * 60 * 24 * 30) + ' месяцев');

//4 задача
// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в годах.
console.log(diff/(1000 * 60 * 60 * 24 * 30 * 12) + ' лет');
