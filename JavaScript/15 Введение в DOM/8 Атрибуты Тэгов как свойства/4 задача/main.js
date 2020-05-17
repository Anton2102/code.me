// Пусть у вас есть ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let a = document.querySelector('#a');
  a.innerHTML += ' (' + a.href + ')';  
});
