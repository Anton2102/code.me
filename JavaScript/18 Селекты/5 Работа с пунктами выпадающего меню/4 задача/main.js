// Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.
let input = document.querySelector('input');
let select = document.querySelector('select');

input.addEventListener('click', function(){
  let optionAct = select.selectedIndex;
  select[optionAct].innerHTML += '!';
});
