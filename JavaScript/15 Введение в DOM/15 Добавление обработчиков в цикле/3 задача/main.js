// Дан следующий код:
//
// <div>1</div>
// <div>2</div>
// <div>3</div>
// <div>4</div>
// <div>5</div>
// let divs = document.querySelectorAll('div');
//
// for (let div of divs) {
// 	div.addEventListener('click', func);
// }
//
// function func() {
// 	this.innerHTML++;
// }
// Сделайте функцию-обработчик анонимной.

let divs = document.querySelectorAll('div');

for (let div of divs) {
	div.addEventListener('click', function(){
    this.innerHTML++;
  });
}
