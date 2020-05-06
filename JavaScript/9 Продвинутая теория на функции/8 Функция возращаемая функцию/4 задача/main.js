// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.

function func(num1){
  let arr = [];
  arr.push(num1);
  return function(num2){
    arr.push(num2)
    return function(num3){
      arr.push(num3)
      return function(num4){
        arr.push(num4)
        return function(){
          return arr;
        }
      };
    };
  };
}

console.log( func(2)(3)(4)(5)() );
