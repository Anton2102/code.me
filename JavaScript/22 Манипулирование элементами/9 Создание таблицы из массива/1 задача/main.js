//1 задача
// Дан массив:
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// Не подсматривая в теоретическую часть урока, выведите элементы приведенного массива в виде HTML таблицы table.

//2 задача // Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, а квадраты этих элементов.
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
let result = document.querySelector('.result');

let table = document.createElement('table');

for(let subArr of arr){
  let tr = document.createElement('tr');

  for(let elem of subArr){
    let td = document.createElement('td');
    td.innerHTML = elem ** 2;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
result.appendChild(table);
