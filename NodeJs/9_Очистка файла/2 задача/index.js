// Дан текстовый файл. Запустите таймер, который каждую секунду будет записывать в файл число - сначала 1, потом 2, потом 3 и так далее. Как только счетчик таймера дойдет до 100 - прекратите отсчет и очистите файл.
const fs = require('fs');
let i = 0;

let timer = setInterval( () => {
  if(i <= 100){
    console.log(i++);
  } else {
    clearInterval(timer);
    fs.truncate('readme.txt', (err) => {
      if (err) throw err;
    });
  }
}, 100);
