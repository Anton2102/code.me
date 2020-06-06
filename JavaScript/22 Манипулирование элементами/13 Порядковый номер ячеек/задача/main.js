// Дана HTML таблица. Запишите в каждую ячейку ее порядковый номер с конца. То есть последней ячейке запишите 1, предпоследней - 2, и так далее.
let tds = document.querySelectorAll('table td');

let i = 1;
for(let td of tds){
  td.innerHTML = i++;
}
