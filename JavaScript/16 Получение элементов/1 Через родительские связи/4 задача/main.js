// Дан элемент #elem:
// <div>
// 	<ul>
// 		<li>text</li>
// 		<li>text</li>
// 		<li id="elem">text</li>
// 		<li>text</li>
// 		<li>text</li>
// 	</ul>
// </div>
// Найдите его родителя и задайте ему красную границу.
document.querySelector('#elem').parentElement.style.border = '1px solid red';
