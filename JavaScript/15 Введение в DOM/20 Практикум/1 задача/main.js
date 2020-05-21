// Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
let input = document.querySelector('input');

input.addEventListener('blur', function(){
  let p = document.querySelector('p');
  p.innerHTML += this.value;
});
