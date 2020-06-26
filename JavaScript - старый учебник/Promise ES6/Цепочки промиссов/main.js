// Сделайте цепочку из трех промисов. Пусть первый промис возвращает число. Сделайте так, чтобы каждый последующий промис через 3 секунды возводил в квадрат результат предыдущего промиса. После окончания манипуляций выведите число алертом на экран.
let input = document.querySelector('.input');
console.log(input);

input.addEventListener('blur', () => {
  let promise = new Promise( (resolve, reject) => {
    let num = Number(input.value);
    if(num){
      resolve(num);
    }
  });

  promise
    .then(
      num => {return num ** 2}
    )
    .then(
      num => {return num ** 2}
    )
    .then(
      num => console.log(num)
    )
});
