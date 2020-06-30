// Запустите таймер, который каждую секунду будет выводить в консоль текущий момент времени.
'use strict'

setInterval( () => {
  let date = new Date();
  console.log(date);
},1000);
