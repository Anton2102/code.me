// Возьмите код из предыдущей задачи и исправьте проблему кода с помощью изученного второго способа.
"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
	alert( square(this) );

	function square(param) {
		return param.value * param.value;
	}
}
