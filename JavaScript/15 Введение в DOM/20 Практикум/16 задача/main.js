// Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');

plus.addEventListener('click', function(){
  let input = document.querySelector('.result');
  input.value = Number(input.value) + 1;
});

minus.addEventListener('click', function(){
  let input = document.querySelector('.result');
  if(Number(input.value) > 0){
    input.value = Number(input.value) - 1;
  }
})
