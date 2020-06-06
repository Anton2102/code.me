// Дан следующий код:
//
// <ul id="parent">
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// </ul>
//
// <input type="submit" id="button">
// Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.
let parent = document.querySelector('#parent');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let li = document.createElement('li');
  li.innerHTML = 'x';
  li.addEventListener('click', del);
  parent.appendChild(li);
});

let lis = parent.querySelectorAll('li');

for(let li of lis){
  li.addEventListener('click', del);
}

function del(){
  parent.removeChild(this);
}
