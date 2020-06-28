// Дана строка:
// let str = 'a.a aba aea';
// Напишите регулярку, которая найдет строку 'a.a', не захватив остальные.
let str = 'a.a aba aea';
console.log(str.replace(/a\.a/g, '!'));
