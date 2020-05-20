// Дана ссылка. По нажатию на эту ссылку добавьте в конец ее текста содержимое ее атрибута href в круглых скобках. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
let a = document.querySelector('a');
a.addEventListener('click', funcAdd);

function funcAdd(){
  this.innerHTML += '(' + this.href + ')';
  a.removeEventListener('click', funcAdd);
}
