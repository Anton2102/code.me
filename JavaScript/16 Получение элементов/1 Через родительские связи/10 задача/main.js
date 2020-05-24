// Дан элемент #elem:
//
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.
document.querySelector('#elem').nextElementSibling.nextElementSibling.innerHTML += '!';
