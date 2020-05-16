// Дан следующий инпут:
//
// <input id="elem" type="email">
// Дана также кнопка. По нажатию на кнопку выведите запишите в атрибут type значение submit.
let button = document.querySelector('#button');
button.addEventListener('click', function(){
  let elem = document.querySelector('#elem');
  elem.type = 'submit';
  console.log(elem.type);
});
