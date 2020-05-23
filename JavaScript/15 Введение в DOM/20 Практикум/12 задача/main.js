// Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
let a = document.querySelectorAll('a');

for(let elem of a){
  elem.innerHTML += ' (' + elem.href + ')';
}
