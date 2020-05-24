// Дан элемент #parent:
//
// <div id="parent">
// 	<p class="www">text</p>
// 	<p class="www">text</p>
// 	<p class="www">text</p>
// 	<p class="ggg">text</p>
// 	<p class="ggg">text</p>
// 	<p class="ggg">text</p>
// </div>
// let parent = document.querySelector('#parent');
// Найдите внутри родителя элементы с классом www и запишите их в переменную elems1. Затем найдите внутри родителя элементы с классом ggg и запишите их в переменную elems2.
let elem = document.querySelector('#parent');
let elems1 = elem.getElementsByClassName('www');
let elems2 = elem.querySelectorAll('.ggg');

console.log(elems1, elems2);
