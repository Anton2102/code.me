// 1 задача // Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.
// 2 задача // Используя созданный вами массив arr выведите на экран число 3, вызвав соответствующую функцию.
// 3 задача // Используя созданный вами массив arr найдите сумму результатов функций (без цикла).
// 4 задача // Переберите созданный вами массив arr циклом и выведите результаты работы всех функций на экран.

let arr = [
  function(){return 1;},
  function(){return 2;},
  function(){return 3;},
];

console.log(arr[2]());

console.log(arr[0]() +  arr[1]() + arr[2]());

for(let elem of arr){
  console.log(elem());
}
