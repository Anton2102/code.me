// Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
let input = document.querySelector('input');

let timer = setInterval(function(){
  input.value = Number(input.value) ** 2;
},1000);
