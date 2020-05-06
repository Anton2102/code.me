// Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.

function func1(){
  return function(){
    return 1;
  };
}

function func2(){
  return function(){
    return 2;
  };
}

console.log( func2()() + func1()() );
