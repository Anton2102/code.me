// Переделайте предыдущую задачу так, чтобы один из промисов в цепочке выполнился с ошибкой. В конце цепочки расположите метод catch, который поймает эту ошибку.
let input = document.querySelector('.input');
console.log(input);

input.addEventListener('blur', () => {
  let promise = new Promise( (resolve, reject) => {
    console.log(1);

    let num = Number(input.value);
    if(num){
      resolve(num);
    } else {
      reject(num);
    }
  });

  promise
    .then(
      num => {
        console.log(2);

        return new Promise( (resolve, reject) => {
          resolve(num ** 2);
        });
      }
    )
    .then(
      num => {
        console.log(3);

        return new Promise( (resolve, reject) => {
          resolve(num ** 2);
        });
      }
    )
    .then(
      num => {
        console.log(num);
        throw new Error('falaut eroor!');
      }
    )
    .catch(
      eroor => {console.log('Ошибка!')}
    )
});
