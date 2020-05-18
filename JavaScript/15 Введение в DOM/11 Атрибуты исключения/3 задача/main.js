// Дан див с несколькими CSS классами, записанными через пробел:
// <div id="elem" class="aaa bbb ccc"></div>
// Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let elem = document.querySelector('#elem');
  let arrArgs = elem.className;
  console.log(arrArgs.split(' '));
});
