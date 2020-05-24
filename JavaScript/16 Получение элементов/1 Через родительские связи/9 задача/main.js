// Дан элемент #elem:
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите его соседа снизу и добавьте ему в конец текст '!'.
document.querySelector('#elem').nextElementSibling.innerHTML += '!';
