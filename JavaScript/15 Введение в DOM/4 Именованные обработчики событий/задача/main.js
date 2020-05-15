// Дан следующий HTML код:
//
// <input id="button1" type="submit" value="button1">
// <input id="button2" type="submit" value="button2">
// Даны следующие функции:
//
// function func1() {
// 	alert(1);
// }
//
// function func2() {
// 	alert(2);
// }
// Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

button1.addEventListener('click', func1);
button2.addEventListener('click', func2);

function func1() {
	alert(1);
}

function func2() {
	alert(2);
}
