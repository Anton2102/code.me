// Дана HTML таблица. Запишите в каждую ячейку ее порядковый номер в ряду.
let trs = document.querySelectorAll('table tr');

for(let i = 0; i < trs.length; i++){
  let tr = trs[i];
  let tds = tr.querySelectorAll('td');
  // console.log(tds);

  for(let j = 0; j < tds.length; j++){
    let td = tds[j];
    td.innerHTML = (i + 1) + '-' + (j + 1);
  }
}
