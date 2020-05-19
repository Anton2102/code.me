// Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите из циклом и установите текст каждого абзаца в значение text.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let elemsP = document.querySelectorAll(".www");

  for(elem of elemsP){
    elem.innerHTML = 'text';
  }
});
