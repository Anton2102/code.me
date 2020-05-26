// Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.
let select = document.querySelector('select');
let button = document.querySelector('input');

button.addEventListener('click', function(){
  console.log(select.selectedIndex);
});
