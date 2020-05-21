// Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let elems = document.querySelectorAll('.sum');
  let p = document.querySelector('p');
  let sum = 0;

  for(let elem of elems){
    sum += Number(elem.value);
  }

  p.innerHTML += sum;
});
