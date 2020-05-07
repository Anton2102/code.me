// 1 задача // Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.
// 2 задача // Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.
let func = (function test(){
  let num = 1;
  return function(){
    if(num <= 5){
      console.log(num);
      num++;
    } else {
      num = 1;
      console.log(num);
      num++;
    }
  };
})();

func();
func();
func();
func();
func();
func();
func();
