// Дан следующий инпут:
//
// <input id="elem" type="email">
// Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let elem = document.querySelector('#elem');
  console.log(elem.type);
});
