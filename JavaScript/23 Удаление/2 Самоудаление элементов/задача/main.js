// Дан следующий код:
//
// <ul id="parent">
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// </ul>
// Сделайте так, чтобы любая li удалялась по клику на нее.

let parent = document.querySelector('#parent');
let lis = parent.querySelectorAll('li');

for(let li of lis){
  li.addEventListener('click', function(){
    parent.removeChild(this);
  })
}
