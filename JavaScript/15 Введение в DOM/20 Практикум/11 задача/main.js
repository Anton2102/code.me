// Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
let button = document.querySelector('.button');

button.addEventListener('click', function(){
  let p = document.querySelectorAll('p');

  for(let i = 0; i < p.length; i++){
    p[i].innerHTML += ' - ' + (i + 1);
  }
});
