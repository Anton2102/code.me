// Сейчас мы с вами реализуем игру угадай число. В этой игре компьютер загадывает число от 1 до 100. В инпут на экране игрок вводит число от 1 до 100, пытаясь угадать, что же загадал компьютер.
// Если игрок ввел число, меньше загаданного, компьютер должен написать 'введите число побольше', а если введено больше загаданного, то, соответственно, компьютер должен написать 'введите число поменьше'.
let input = document.querySelector('input');
let result = document.querySelector('.result');
let pcNum = Math.floor(Math.random() * 100);

input.addEventListener('blur', function(){
  let num = Number(this.value);

  if(num > pcNum){
    result.innerHTML = 'Число меньше!';
  } else if (num == pcNum){
    result.innerHTML = 'Вы победили!';
  } else if (num > 100 || num < 0){
    result.innerHTML = 'Заданное число выходит за пределы!';
  } else {
    result.innerHTML = 'Число больше!';
  }
});
