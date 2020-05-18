// Дан див:
// <div id="elem"></div>
// Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let elem = document.querySelector('#elem');
  elem.className = 'www';
  console.log(elem.className);
});
