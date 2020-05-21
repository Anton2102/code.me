// Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
let input = document.querySelector('input');

input.addEventListener('blur', function(){
  console.log(this.value.split(' ').length);
});
