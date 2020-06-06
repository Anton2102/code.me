// Дан следующий код:
//
// <ul id="parent">
// 	<li>1</li>
// 	<li id="elem">2</li>
// 	<li>3</li>
// </ul>
//
// <input type="submit" id="button">
// Сделайте так, чтобы по нажатию на кнопку удалялся элемент #elem.

let parent = document.querySelector('#parent');
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  parent.removeChild(elem);
});
