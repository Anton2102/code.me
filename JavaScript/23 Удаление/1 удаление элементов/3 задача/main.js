// Дан следующий код:
//
// <ul>
// 	<li>1</li>
// 	<li id="elem">2</li>
// 	<li>3</li>
// </ul>
// Сделайте так, чтобы по нажатию на #elem этот элемент удалился.
let elem = document.querySelector('#elem');
elem.parentElement.removeChild(elem);
