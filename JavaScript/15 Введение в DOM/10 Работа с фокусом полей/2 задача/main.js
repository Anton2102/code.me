// Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.
let input = document.querySelector('#input');

input.addEventListener('blur', function(){
  input.value *= input.value;
});
