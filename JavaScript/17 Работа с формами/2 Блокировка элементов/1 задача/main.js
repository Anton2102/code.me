// Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.
let input = document.querySelector('.input');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
  input.disabled = true;
});
