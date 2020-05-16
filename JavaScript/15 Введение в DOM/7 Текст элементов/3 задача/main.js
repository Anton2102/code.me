// Дан абзац и две кнопки. По нажатию на первую кнопку запишите в абзац слово 'привет', а по нажатию на вторую кнопку - слово 'пока'.
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

button1.addEventListener('click', function(){
  let p = document.querySelector('#p');
  p.innerHTML = 'Привет!';
});

button2.addEventListener('click', function(){
  let p = document.querySelector('#p');
  p.innerHTML = 'Пока!';
});
