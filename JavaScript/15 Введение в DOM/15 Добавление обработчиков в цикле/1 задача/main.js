// Дана следующая функция:
// function func() {
// 	this.value = Number(this.value) + 1;
// }
// Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.

let inputs = document.querySelectorAll('input');

for(let elem of inputs){
  elem.addEventListener('blur', func);
}

function func() {
	this.value = Number(this.value) + 1;
}
