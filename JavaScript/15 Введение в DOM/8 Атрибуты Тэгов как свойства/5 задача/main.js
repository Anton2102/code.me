// Пусть у вас есть картинка. Разместите ее на странице в помощью тега img. Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let img = document.querySelector('#img');
  let p = document.querySelector('#p');
  p.innerHTML = img.src;
});
