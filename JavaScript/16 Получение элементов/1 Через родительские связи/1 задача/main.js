// Дан элемент #elem:
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите первого потомка этого элемента и сделайте его текст красного цвета.

let elem = document.querySelector('#elem');
elem.firstElementChild.style.color = 'red';
