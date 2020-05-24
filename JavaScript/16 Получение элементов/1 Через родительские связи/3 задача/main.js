// Дан элемент #elem:
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
let elems = document.querySelector('#elem').children;

for(let elem of elems){
  elem.innerHTML += '!';
}
