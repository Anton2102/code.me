// Пусть у вас есть список ul с тегами li:
//
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.
let elem = document.querySelector('#elem');

elem.addEventListener('click', function(event){
  console.log(event.ctrlKey);
  if(event.ctrlKey){
    event.target.innerHTML += 1;
  } else if(event.shiftKey){
    event.target.innerHTML += 2;
  }
});
