// Дана кнопка. По двойному клику по ней выведите на экран какое-нибудь сообщение.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  console.log('Что-то!');
});
