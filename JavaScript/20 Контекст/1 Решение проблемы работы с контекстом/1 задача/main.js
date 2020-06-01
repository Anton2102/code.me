// Пусть дан такой код:
//
// <input id="elem" value="3">
// "use strict";
//
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
//
// function func() {
// 	alert( square() );
//
// 	function square() {
// 		return this.value * this.value;
// 	}
// }
// Автор кода хотел, чтобы по потери фокуса на экран вывелся квадрат числа из value инпута. Однако, почему-то при потери фокуса в консоль выдается ошибка.
//
// Исправьте ошибку автора кода. Напишите текст, в котором вы дадите объяснение автору кода, почему возникла его ошибка.

"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
  let num = this;
	alert( square() );

	function square() {
		return num.value * num.value;
	}
}
