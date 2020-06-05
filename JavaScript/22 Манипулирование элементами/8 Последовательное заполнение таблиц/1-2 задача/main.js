//1 задача // Выведите на экран таблицу table размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25.1
//2 задача // Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50.
let result = document.querySelector('.result');

let table = document.createElement('table');
let elem = 2;

for(let i = 0; i < 5; i++){
  let tr = document.createElement('tr');

  for(let j = 0; j < 5; j++){
    let td = document.createElement('td');
    td.innerHTML = elem;
    elem += 2;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
result.appendChild(table);
