// Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.
let i = 10;
let timer = setInterval(function(){
  if(i > 0){
    console.log(i--);
  } else {
    clearInterval(timer);
  }
}, 1000);
