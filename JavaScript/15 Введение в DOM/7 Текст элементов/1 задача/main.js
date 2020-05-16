// Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.

let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let elem1 = document.querySelector('#elem1');
  let elem2 = document.querySelector('#elem2');

  console.log(Number(elem1.innerHTML) + Number(elem2.innerHTML));
});
