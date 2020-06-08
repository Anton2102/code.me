// Сделайте калькулятор, который будет находить площадь и периметр квадрата.
let input = document.querySelector('input');
let p = document.querySelector('.result .p');
let s = document.querySelector('.result .s');

input.addEventListener('input', function(){
  p.innerHTML = 'Периметр: ' + Number(this.value) * 4;
  s.innerHTML = 'Площадь: ' + Number(this.value) * 2;
});
