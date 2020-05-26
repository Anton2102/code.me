// Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.
let button = document.querySelector('.button');
let select = document.querySelector('select');
let p = document.querySelector('p');

button.addEventListener('click', function(){
  p.innerHTML = select.value;
});
