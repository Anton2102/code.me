// Пусть у вас есть список ul с тегами li:
//
// ul {
// 	padding: 30px;
// 	border: 1px solid red;
// }
// li {
// 	list-style-type: none;
// 	margin-bottom: 20px;
// 	border: 1px dashed black;
// }
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>

let elem = document.querySelector('#elem');

elem.addEventListener('click', function(){
  event.target.innerHTML += '!';
});
