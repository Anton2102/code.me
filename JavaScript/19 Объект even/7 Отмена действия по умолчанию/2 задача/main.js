// Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.
let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let p = document.querySelector('p');
let a = document.querySelector('a');

a.addEventListener('click', function(event){
  event.preventDefault();
  p.innerHTML = Number(input1.value) + Number(input2.value);
})
