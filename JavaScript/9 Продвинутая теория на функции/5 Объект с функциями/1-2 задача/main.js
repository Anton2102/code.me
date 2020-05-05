// 1 задача // Переберите созданный вами массив arr циклом и выведите результаты работы всех функций на экран.

let obj = {
  func1: function(){return 1;},
  func2: function(){return 2;},
  func3: function(){return 3;},
};

let sum = 0;
for(let key in obj){
  sum += obj[key]();
  console.log(obj[key]());
}

console.log(sum);
