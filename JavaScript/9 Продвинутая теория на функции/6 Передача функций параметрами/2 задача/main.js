// 2 задача // Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.
// 3 задача // Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.
// 4 задача // Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.

function test(func1, func2, func3){
  console.log(func1() + func2() + func3());
}

let func1 = function(){
  return 1;
}

let func2 = function(){
  return 2;
}

let func3 = function(){
  return 3;
}

test(func1, func2, func3);
