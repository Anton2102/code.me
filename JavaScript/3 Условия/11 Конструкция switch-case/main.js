// Переменная num может принимать значения 1, 2, 3 или 4. Если она имеет значение 1, то выведите на экран текст 'зима', если значение 2 - 'весна' и так далее. Если в переменной будет какое-то другое значение - выведите на экран сообщение об ошибке. Решите задачу через switch-case.
let num = 3;
switch(num){
  case 1:
    console.log('Зима');
    break;

  case 2:
    console.log('Весна');
    break;

  case 3:
    console.log('Лето');
    break;

  case 4:
    console.log('Осень');
    break;

  default:
    console.log('Erorr');
}
