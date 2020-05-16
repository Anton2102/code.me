// Дан абзац и кнопка. По нажатию на кнопку запишите в абзац текст '<i>hello</i>'.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let p = document.querySelector('#p');
  p.innerHTML = '<i>hello</i>';
});
