// Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.
let input = document.querySelector('input');

input.addEventListener('input', function(){
  if(input.value.length == 5){
    console.log('Хватит, уже 5!');
  }
});
