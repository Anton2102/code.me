//1 задача// Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.
//2 задача// Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 10 рядов на 5 колонок.
//3 задача // Модифицируйте предыдущую задачу так, чтобы в каждую td добавлялся текст 'x'.
let table = document.querySelector('table');

for(let i = 0; i < 10; i++){
  let tr = document.createElement('tr');

  for(let j = 0; j < 5; j++){
    let td = document.createElement('td');
    td.innerHTML = 'x';
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
