// Даны 3 абзаца с текстом. По нажатию на первый абзац запишите в его текст число 1, по нажатию на второй абзац запишите в его текст число 2, а по нажатию на третий - запишите в его текст число 3.
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');

p1.addEventListener('click', function(){
  p1.innerHTML = 1;
});

p2.addEventListener('click', function(){
  p2.innerHTML = 2;
});

p3.addEventListener('click', function(){
  p3.innerHTML = 3;
});
