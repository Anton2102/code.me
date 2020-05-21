// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
let input = document.querySelector('input');

input.addEventListener('blur', function(){
  let arr = [];
  let sum = 0;

  for(let i = 0; i <= Number(this.value); i++){
    arr.push(i);
  }

  for(let elem of arr){
    sum += elem;
  }

  this.value = sum;
});
