// Дана таблица размером 2 на 2:
//
// <table id="table">
// 	<tr>
// 		<td></td>
// 		<td></td>
// 	</tr>
// 	<tr>
// 		<td></td>
// 		<td></td>
// 	</tr>
// </table>
// td {
// 	width: 50px;
// 	height: 50px;
// 	border: 1px solid black;
// }
// Дана также кнопка. Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.

let table = document.querySelector('#table');
let button = document.querySelector('button');

button.addEventListener('click', function(){
  //добавляем строку
  let trLength = table.querySelectorAll('tr');
  let tdLength = trLength[0].querySelectorAll('td').length;

  let tr = document.createElement('tr');
  for(let i = 0; i < tdLength; i++){
    let td = document.createElement('td');
    tr.appendChild(td);
  }
  table.appendChild(tr);

  //добавляем ряд
  for(let i = 0; i < trLength.length; i++){
    let td = document.createElement('td');
    trLength[i].appendChild(td);
  }
});
