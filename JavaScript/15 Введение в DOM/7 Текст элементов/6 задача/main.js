// Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let p = document.querySelector('#p');
  p.innerHTML = Number(p.innerHTML) + 1;
});
