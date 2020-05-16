// Пусть у вас есть ссылка в виде тега a, кнопка и абзац. По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let a = document.querySelector('#a');
  let p = document.querySelector('#p');
  p.innerHTML = a.href;
});
