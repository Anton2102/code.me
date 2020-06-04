// Дан ol и кнопка:
// <ol id="elem"></ol>
// <button id="button">click me</button>
// Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'пункт'.
let ol = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let li = document.createElement('li');
  li.innerHTML = 'пункт';

  ol.appendChild(li);
});
