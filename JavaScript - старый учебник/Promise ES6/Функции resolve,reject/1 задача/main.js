// Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, после которой промис должен зарезолвится (то есть выполнится успешно).

let promise = new Promise( (resolve, reject) => {
  let test = true;

  setTimeout( () => {
    if(test) {
      resolve();
    } else {
      reject();
    }
  }, 3000);
});

  promise.then(
    resolve => console.log('Успех!'),
    reject => {console.log('Провал!')}
  );
