// Создайте функцию как Function Expression. Проверьте то, что она не будет доступна выше места своего объявления.

console.log(func);

let func = function(){
  return '!';
}
