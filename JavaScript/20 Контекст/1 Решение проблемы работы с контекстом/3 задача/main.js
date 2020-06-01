// Возьмите код из предыдущей задачи и исправьте проблему кода с помощью изученного третьего способа.
"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
	let square = () => {
		return this.value * this.value;
	}
  console.log(square());
}
