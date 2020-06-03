// Дан инпут, кнопка и абзац. В инпут вводится какое-то число. По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.
let input = document.querySelector('input');
let button = document.querySelector('button');
let p = document.querySelector('p');

button.addEventListener('click', function start(){
  p.innerHTML = input.value;

  let timer = setInterval(function(){
    if(Number(p.innerHTML) > 0){
      p.innerHTML = Number(p.innerHTML) - 1;
    } else {
      clearInterval(timer);
    }
  }, 1000);

  this.removeEventListener('click', start);
});
