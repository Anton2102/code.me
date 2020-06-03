// Дана кнопка. Дан абзац, текстом которого является число, например, 10. По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. Как только значение абзаца станет равно нулю - остановите таймер.
let button = document.querySelector('button');
let p = document.querySelector('p');

button.addEventListener('click', function check(){
  let tmr = setInterval(function(){
    if(Number(p.innerHTML) > 0){
      p.innerHTML = Number(p.innerHTML) - 1;
    } else{
      clearInterval(tmr);
    }
  }, 1000);
  this.removeEventListener('click', check);
});
