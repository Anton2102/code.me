// Дан абзац и кнопка. В абзаце записано какое-то число. По нажатию на кнопку возведите значение абзаца в квадрат и запишите его обратно.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let elem = document.querySelector('#p');
  elem.innerHTML = Number(elem.innerHTML) ** 2;
});
