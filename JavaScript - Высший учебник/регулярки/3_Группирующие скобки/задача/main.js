// Дана строка:
// let str = 'ab abab abab abababab abea';
// Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.
let str = 'ab abab abab abababab abea';
console.log(str.replace(/(ab)+/g, '!'));
