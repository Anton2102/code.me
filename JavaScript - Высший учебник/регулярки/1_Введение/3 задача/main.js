// Дана строка:
// let str = 'aba aca aea abba adca abea';
// Напишите регулярку, которая найдет строки 'abba' и 'abea', не захватив 'adca'.
let str = 'aba aca aea abba adca abea';
console.log(str.replace(/ab.a/g, '!'));
