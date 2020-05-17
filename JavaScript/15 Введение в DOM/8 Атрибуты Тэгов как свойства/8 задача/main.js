// Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. По нажатию на первую кнопку запишите в атрибут src путь к первой картинке, а по нажатию на вторую - путь ко второй картинке.
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

button1.addEventListener('click', function(){
  let img = document.querySelector('#img');
  img.src = '1.jpg';
});

button2.addEventListener('click', function(){
  let img = document.querySelector('#img');
  img.src = '2.jpg';
});
