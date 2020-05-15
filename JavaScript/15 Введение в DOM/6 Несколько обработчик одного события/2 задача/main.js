// Дана кнопка. Привяжите к ней три анонимных обработчика двойного клика по ней. Пусть первый обработчик выводит число 1, второй обработчик - число 2, а третий - число 3.

// на ноуте dbclick не работает, настраивать не охото...
// поэтому просто click :3
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  console.log(1);
});

button.addEventListener('click', function(){
  console.log(2);
});

button.addEventListener('click', function(){
  console.log(3);
});
