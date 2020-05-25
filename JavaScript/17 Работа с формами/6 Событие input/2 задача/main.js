// Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести. Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.
let input = document.querySelector('input');
let p = document.querySelector('p');

input.addEventListener('input', function(){
  if(input.value.length <= 5){
    p.innerHTML = 'Можно ещё ввести <b>' + (5 - input.value.length) + '</b> символов!';
  } else {
    p.innerHTML = 'Превышение на <b>' + (input.value.length - 5) + '</b> символа!';
  }
});
