// Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
let input = document.querySelector('input');

input.addEventListener('blur', function(){
  let str = this.value;
  let elems = str.split(',');
  let sum = 0;

  for(let elem of elems){
    sum += Number(elem);
  }
  input.value = sum/elems.length;
});
