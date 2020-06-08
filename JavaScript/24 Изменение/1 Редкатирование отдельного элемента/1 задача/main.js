let elem = document.querySelector('#elem');
let input = document.querySelector('#input');

input.value = elem.innerHTML; // записываем в инпут текст абзаца

input.addEventListener('input', function() {
	elem.innerHTML = this.value;
});
