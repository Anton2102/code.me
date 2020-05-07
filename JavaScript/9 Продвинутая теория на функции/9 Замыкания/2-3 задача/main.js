// 2 задача // Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число.
// 3 задача // Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.

function test(){
  let num = 10;
  return function(){
    while(num >= 0){
      console.log(num);
      num--;
    }
    if(num < 0){
      console.log('Отсчет закончен!');
    }
  };
}

let func = test();
func();
func();
