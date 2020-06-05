// Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.
let table = document.querySelector('table');
let button = document.querySelector('button');

button.addEventListener('click', function(){
  let tr = document.createElement('tr');

  for(let i = 0; i < 3; i++){
    let td = document.createElement('td');
    td.innerHTML = 'x';
    tr.appendChild(td);
  }
  table.appendChild(tr);
});
