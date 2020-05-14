// Дан следующий HTML:
//
// <div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с id, равным block.

let elem = document.querySelector('#block p');
console.log(elem);
