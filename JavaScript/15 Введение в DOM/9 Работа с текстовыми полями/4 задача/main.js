// Даны два инпута и кнопка. В первый инпут пользователем вводится число. По нажатию на кнопку запишите во второй инпут квадрат введенного числа.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let inputText = document.querySelector('#inputText');
  let inputSquere = document.querySelector('#inputSquere');

  inputSquere.value = Number(inputText.value) ** 2;
});
