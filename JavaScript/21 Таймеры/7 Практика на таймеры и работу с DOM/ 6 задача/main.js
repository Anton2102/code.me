// Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.
let p = document.querySelector('p');
let buttonStart = document.querySelector('.button_one');
let buttonStop = document.querySelector('.button_two');

let timer;
buttonStart.addEventListener('click', start);
buttonStop.addEventListener('click', stop);

function start(){
  timer = setInterval(function(){
    p.innerHTML = Number(p.innerHTML) + 1;
  }, 1000);
  buttonStart.removeEventListener('click', start);
}

function stop(){
  clearInterval(timer);
  buttonStart.addEventListener('click', start);
}
