// Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.
let input = document.querySelector('input');

input.addEventListener('change', function(){
  if(input.value.length < 5){
    input.style.border = '1px solid green';
  } else {
    input.style.border = '1px solid red';
  }
});
