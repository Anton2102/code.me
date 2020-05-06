// Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа.
//
// Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.

function func(num1, num2){
  function square(num1){
    return num1 ** 2;
  }

  function cube(num2){
    return num2 ** 3;
  }

  return square(num1) + cube(num2);
}

console.log(func(3,2));
