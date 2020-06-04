// Дан ol:
// <ol id="elem"></ol>
// Вставьте ему в конец li с текстом 'пункт'.
let elem = document.querySelector('#elem');

let li = document.createElement('li');
li.innerHTML = 'пункт';

elem.appendChild(li);
