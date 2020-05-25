// Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.
let checkbox = document.querySelector('input');

checkbox.addEventListener('change', function(){
  console.log(checkbox.checked);
});
