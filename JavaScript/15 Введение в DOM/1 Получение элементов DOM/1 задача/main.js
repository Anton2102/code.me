// Даны 3 абзаца:
// <p id="elem1">1</p>
// <p id="elem2">2</p>
// <p id="elem3">3</p>
// Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль.

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

console.log(elem1, elem2, elem3);
