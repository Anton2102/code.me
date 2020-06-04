// Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.
let ol = document.querySelector('ol');
let button = document.querySelector('button');

button.addEventListener('click', function(){
  let li = document.createElement('li');
  li.innerHTML = 'пункт';

  li.addEventListener('click', function(){
    this.innerHTML += '!';
  });

  ol.appendChild(li);
});
