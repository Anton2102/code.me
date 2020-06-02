//1 задача.. Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.
//2 задача.. Возьмите ваше решение предыдущей задачи. Проверьте, что многократное нажатие на кнопку приводит к ускорению отсчета. Исправьте эту проблему.
let button = document.querySelector('button');

button.addEventListener('click', function tmr(){
  let i = 100;
  setInterval(() => console.log(i--), 1000);
  this.removeEventListener('click', tmr);
});
