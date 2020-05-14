// Дана кнопка. По наведению на нее выведите на экран какое-нибудь сообщение.
let button = document.querySelector('#button');

button.addEventListener('mouseover', function(){
  console.log('Что-то!');
});
