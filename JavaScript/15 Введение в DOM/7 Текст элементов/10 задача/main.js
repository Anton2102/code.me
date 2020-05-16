// Дан абзац с текстом и кнопка. По нажатию на кнопку прочитайте текст абзаца, оберните этот текст в теги <b> и запишите новый текст обратно в абзац.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let p = document.querySelector('#p');
  p.innerHTML = '<b>' + p.innerHTML + '</b>';
});
