// Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.
let input = document.querySelector('.input');
let disabledTrue = document.querySelector('.disabledTrue');
let disabledFalse = document.querySelector('.disabledFalse');

disabledTrue.addEventListener('click', function(){
  input.disabled = false;
});

disabledFalse.addEventListener('click', function(){
  input.disabled = true;
});
