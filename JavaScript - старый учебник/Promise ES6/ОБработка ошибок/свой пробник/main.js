//считываем input, кнопку и место под результат
let input = document.querySelector('.input');
let button = document.querySelector('.button');
let result = document.querySelector('.result');

//вешаем обработчик на кнопку
button.addEventListener('click', () => {

  //создаем промис
  let promise = new Promise( (resolve, reject) => {
    //преобразуем наш input в число
    let num = Number(input.value);

    //проверяем корректность ввода! С навешиванием обработки ошибки..
    if(!(Number.isNaN(num))){
      resolve(num);
    }else {
      reject('В input неккоректное число!');
    }
  });

  promise
    .then(
      num => {
        return new Promise( (resolve, reject) => {
          let arr = [];

          for(let i = 1; i <= num; i++){
            arr.push(i);
          }

          if(arr.length < 10){
            resolve(arr);
          } else {
            reject('Лимит массива!');
          }
        });
      }
    )
    .then(
      arr => {
        for(let elem of arr){
          result.innerHTML += '<b>' + elem + '</b>';
        }
      }
    )
    .catch(
      error => {console.log(error)},
    )
});
