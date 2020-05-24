// Дан элемент #elem:
//
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите его соседа сверху и добавьте ему в конец текст '!'
document.querySelector('#elem').previousElementSibling.innerHTML += '!';
