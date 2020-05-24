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
// Найдите его родителя его родителя и задайте ему красную границу.
document.querySelector('#elem').parentElement.parentElement.style.border = '2px solid red';
