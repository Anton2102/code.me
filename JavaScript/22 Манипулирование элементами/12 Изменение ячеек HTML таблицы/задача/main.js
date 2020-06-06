// Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.
let table = document.querySelectorAll('table td');
let button = document.querySelector('button');

button.addEventListener('click', function(){
  for(let td of table){
    td.innerHTML = Number(td.innerHTML) * 2;
  }
});
