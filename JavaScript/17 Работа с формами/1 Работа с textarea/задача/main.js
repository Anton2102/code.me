// Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.
let textarea = document.querySelector('textarea');

textarea.addEventListener('blur', function(){
  let p = document.querySelector('p');
  p.innerHTML = textarea.value;
});
