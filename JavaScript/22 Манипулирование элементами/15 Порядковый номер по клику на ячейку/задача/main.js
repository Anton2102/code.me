// Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в эту ячейку записывался порядковый номер этой ячейки с конца таблицы.
let tds = document.querySelectorAll('table td');

for(let i = 0; i < tds.length; i++){
  tds[i].addEventListener('click', function(){
    this.innerHTML = i + 1;
  });
}
