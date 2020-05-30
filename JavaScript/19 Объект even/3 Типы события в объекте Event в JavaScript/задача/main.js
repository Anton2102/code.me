// В следующем коде в двум событиям привязан один и тот же обработчик:
//
// <button id="elem">text</button>
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);
//
// function func() {
//
// }
// Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный.

let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func() {
  if(event.type == 'click'){
    this.style.color = 'red';
  }
  if(event.type == 'dbclick'){
    //Сижу на ноуте с тачем, без мышки... Тут тоже красивый код, который не проверить dbclick`ом :)
  }
}
