// Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.
let select = document.querySelector('select');
let input = document.querySelector('input');

input.addEventListener('click', function(){
  let option = select[3];
  option.selected = true;
});
