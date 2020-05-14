// Дана кнопка. По уходу курсора с нее выведите на экран какое-нибудь сообщение.
let button = document.querySelector('#button');
button.addEventListener('mouseout', function(){
  console.log('Что-то!');
});
