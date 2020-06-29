// Дана строка:
// let str = 'ave a#a a2a a$a a4a a5a a-a aca';
// Напишите регулярку, которая заменит все пробелы на '!'.
let str = 'ave a#a a2a a$a a4a a5a a-a aca';
console.log(str.replace(/\s/g, '!'));
