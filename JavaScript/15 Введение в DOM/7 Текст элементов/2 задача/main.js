// Даны два абзаца и две кнопки. Пусть нажатие на первую кнопку выводит текст первого абзаца, а нажатие на вторую кнопку - текст второго абзаца.
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

button1.addEventListener('click', function(){
  let elem = document.querySelector('#p1');
  console.log(elem.innerHTML);
});

button2.addEventListener('click', function(){
  let elem = document.querySelector('#p2');
  console.log(elem.innerHTML);
});
