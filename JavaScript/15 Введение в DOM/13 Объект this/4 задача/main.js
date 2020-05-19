// Даны 3 инпута, в которых записаны какие-то числа. По потери фокуса в любом из инпутов возведите стоящее в нем число в квадрат.
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');

input1.addEventListener('blur', intoOnQuery);
input2.addEventListener('blur', intoOnQuery);
input3.addEventListener('blur', intoOnQuery);

function intoOnQuery(){
  this.value *= this.value;
}
