// Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let input = document.querySelector('#input');
  let p = document.querySelector('#p');
  p.innerHTML = input.value;
});
