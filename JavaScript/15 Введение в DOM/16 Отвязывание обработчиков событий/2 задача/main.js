// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. После того, как значение кнопки достигнет 10 - отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие.
let button = document.querySelector('input');

button.addEventListener('click', funcAdd);

function funcAdd(){
  this.value = Number(this.value) + 1;
  if (Number(this.value) >= 10){
    button.removeEventListener('click', funcAdd);
  }
}
