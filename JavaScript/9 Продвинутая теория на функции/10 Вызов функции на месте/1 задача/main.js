// Допишите следующий код так, чтобы его запуск алертом выводил '!':
//
// (function() {
// 	// какой-то код
// })()()();

(function() {
	return function(){
    return function(){
      console.log('!');
    };
  };
})()()();
