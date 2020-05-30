// Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.
let p = document.querySelector('p');
let input = document.querySelector('input');

input.addEventListener('keydown', function(){
  if(event.key == 'Enter'){
    p.innerHTML = this.value;
    this.value = '';
  }
});
