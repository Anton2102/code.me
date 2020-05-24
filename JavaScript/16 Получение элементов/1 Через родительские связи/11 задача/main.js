// Дан элемент #elem:
//
// <ul>
// 	<li>text1</li>
// 	<li>text2</li>
// 	<li id="elem">text3</li>
// 	<li>text4</li>
// 	<li>text5</li>
// </ul>
// Поменяйте местами текст его соседа сверху и текст его соседа снизу.
let current = document.querySelector('#elem').innerHTML;
document.querySelector('#elem').innerHTML = document.querySelector('#elem').previousElementSibling.innerHTML;
document.querySelector('#elem').previousElementSibling.innerHTML = current;
