// Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).
let result = document.querySelector('div');
let button = document.querySelector('button');
let table = document.createElement('table');
let w = document.querySelector('.w');
let h = document.querySelector('.h');

button.addEventListener('click', function(){
  for(let i = 0; i < Number(h.value); i++){
    let tr = document.createElement('tr');

    for(let j = 0; j < Number(w.value); j++){
      let td = document.createElement('td');
      td.innerHTML = 'x';

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  result.appendChild(table);
});
