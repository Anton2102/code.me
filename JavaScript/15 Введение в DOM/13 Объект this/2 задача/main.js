// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.
let button = document.querySelector('#button');

button.addEventListener('click', function(){
  this.value = Number(this.value) + 1;
});
