// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
//
// (function() {
// 	// какой-то код
// })(1)(2)(3);

(function(num1) {
	return function(num2){
    return function(num3){
      console.log(num1 + num2 + num3);
    };
  };
})(1)(2)(3);
