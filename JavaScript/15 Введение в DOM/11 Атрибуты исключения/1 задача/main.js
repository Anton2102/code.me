// <div id="elem" class="content no-gap"></div>
// Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let elem = document.querySelector('#elem');
  console.log(elem.className);
});
