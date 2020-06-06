// Дан следующий код:
//
// <ul id="parent">
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// </ul>
//
// <input type="submit" id="button">
// Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.

let button = document.querySelector('#button');
let parent = document.querySelector('#parent');
let lis = document.querySelectorAll('#parent li');

button.addEventListener('click', function(){
  parent.removeChild(lis[lis.length - 1]);
});
