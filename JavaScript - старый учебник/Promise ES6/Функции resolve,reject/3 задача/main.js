// Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так, чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис. Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
let promise = new Promise( (resolve, reject) => {
  start();

  function start(){
    let interval = randomInterval(1, 10);
    console.log(interval);
    setTimeout( () => {
      if(interval >= 1 && interval <= 5){
        resolve();
      } else if (interval >= 6 && interval <= 10){
        reject();
      }
    }, interval * 1000);
  }
});

function randomInterval(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

  promise.then(
    resolve => {console.log('cool!')},
    reject => {console.log('^,^')}
  );
