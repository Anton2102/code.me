// Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let elems = document.querySelectorAll('.p');

  for(let i = 0; i < elems.length; i++){
    elems[i].innerHTML += i + 1;
  }
});
