// Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.
let input = document.querySelector('.input');
let button = document.querySelector('.button');
input.disabled = true;

button.addEventListener('click', function(){
  console.log(input.disabled);
});
