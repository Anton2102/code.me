// Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let p = document.querySelector('#p');
  let elems = document.querySelectorAll('input');
  let sum = 0;

  for(let elem of elems){
    sum += Number(elem.value);
  }
  p.innerHTML = sum;
})
