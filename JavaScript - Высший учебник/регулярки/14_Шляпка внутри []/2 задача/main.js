// Дана строка:
// let str = '^xx axx ^zz bkk @ss';
// Напишите регулярку, которая найдет строки по шаблону: НЕ шляпка и не собака, а затем две латинских буквы.
let str = '^xx axx ^zz bkk @ss';
console.log(str.replace(/[^\^@][a-z]{3}/g, '!'));
