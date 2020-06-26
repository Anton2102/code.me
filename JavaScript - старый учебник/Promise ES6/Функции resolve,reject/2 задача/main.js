// Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, после которой промис должен зареджектится (то есть выполнится с ошибкой).
let promise = new Promise( (resolve, reject) => {
  let test = false;

  setTimeout( () => {
    if(test){
      resolve();
    } else {
      reject();
    }
  }, 3000);
});

promise.then(
  resolve => {console.log('Успех!')},
  reject => {console.log('Провал!')}
);
