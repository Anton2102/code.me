// Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.
let button = document.querySelector('button');
let p = document.querySelector('p');

button.addEventListener('click', timer);

function timer(){
  let tmr = setInterval(function(){
    p.innerHTML = Number(p.innerHTML) + 1;
  }, 1000);
  button.removeEventListener('click', timer);
}
