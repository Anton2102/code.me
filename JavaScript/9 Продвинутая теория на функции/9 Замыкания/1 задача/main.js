// Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.

function test(){
  let num = 1;
  return function(){
    console.log(num);
    num++;
  };
}

let func = test();
func();
func();
func();
