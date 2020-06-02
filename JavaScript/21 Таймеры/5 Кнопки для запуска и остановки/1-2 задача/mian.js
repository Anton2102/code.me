//1 задача
// Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.
// По нажатию на вторую кнопку остановите таймер. Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.

//2 задача
// Приведенный мною в теоретической части код не учитывает то, что на кнопку старт можно сделать несколько нажатий. Для исправления этой проблемы можно по нажатию на кнопку старт отвязывать событие от этой кнопки, а по нажатию на кнопку стоп - привязывать обратно. Исправьте проблему.
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');

let i = 10;
let timer;

start.addEventListener('click', tmrStart);

stop.addEventListener('click', function tmrStop(){
  clearInterval(timer);
  start.addEventListener('click', tmrStart);
});

function tmrStart(){
  timer = setInterval(function(){
    if(i == 0){
      clearInterval(timer);
    } else {
      console.log(--i);
    }
  }, 1000);
  this.removeEventListener('click', tmrStart);
}
