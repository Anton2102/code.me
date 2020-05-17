// Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let img = document.querySelector('#img');
  img.width = 300;
});
