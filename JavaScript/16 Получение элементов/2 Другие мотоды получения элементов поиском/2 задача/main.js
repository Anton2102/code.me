// Дан список:
//
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Получите все теги li по имени тега и сделайте их текст красного цвета.
let elems = document.getElementsByTagName('li');

for(let elem of elems){
  elem.style.color = 'red';
}
