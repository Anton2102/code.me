// Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.
function func(){
  return function(){
    return function(){
      return function(){
        return function(){
          return '!';
        };
      };
    };
  };
}

console.log( func()()()()() );
