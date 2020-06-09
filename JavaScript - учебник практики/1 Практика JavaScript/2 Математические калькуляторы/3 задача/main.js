// Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа.
let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', function(){
  let num = Number(input.value);
  let arr = [];

  for(let i = 0; i <= num; i++){
    if(num % i == 0){
      arr.push(i);
    }
  }
  console.log(arr);
});
