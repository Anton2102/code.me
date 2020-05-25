// Дан инпут и абзац. По изменению инпута выведите его текст в абзац.
let input = document.querySelector('input'),
    p = document.querySelector('p');

input.addEventListener('change', function(){
  p.innerHTML = input.value;
});
