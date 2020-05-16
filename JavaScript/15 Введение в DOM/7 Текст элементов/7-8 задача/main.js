//7 задача
// Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.

// 8 задача
// Модифицируйте предыдущую задачу так, чтобы восклицательный знак записывался не в конец текста, а в начало.

let button = document.querySelector('#button');

button.addEventListener('click', function(){
  let p = document.querySelector('#p');
  p.innerHTML = '!' + p.innerHTML;
});
