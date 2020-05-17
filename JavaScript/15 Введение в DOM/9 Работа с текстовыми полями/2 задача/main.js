// Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let text = document.querySelector('#text');
  text.value = 'Что-то';
});
