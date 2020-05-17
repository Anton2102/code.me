// Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина. Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let img = document.querySelector('#img');
  img.width = Number(img.width) * 2;
});
