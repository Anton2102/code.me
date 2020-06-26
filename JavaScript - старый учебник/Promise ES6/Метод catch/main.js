// Сделайте промис, который через 5 секунд случайным образом выполнится или с успехом, или с ошибкой. Примените изученный метод catch для отлавливания ошибок.
let promise = new Promise( (resolve, reject) => {
    let boolean = Math.floor(Math.random() * (3 - 1));

    if(boolean == 1){
      resolve('result');
    } else {
      reject('error');
    }
});

promise
  .then(
    result => {console.log(result)}
  )
  .catch(
    error => {console.log(error)}
  )
