// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой от 1 до 5 секунд.
// Пусть каждый промис своим результатом возвращает эту задержку.
// С помощью Promise.all получите массив результатов, найдите его сумму,
// выведите на экран.
let sum = 0;
let arr = [
  new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(1);
    }, 100);
  }),

  new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(2);
    }, 200);
  }),

  new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(3);
    }, 300);
  })

];
Promise.all(arr).then(results => {resolve});
