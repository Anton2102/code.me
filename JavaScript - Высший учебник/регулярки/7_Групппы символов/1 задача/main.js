// Дана строка:
// let str = 'a1a a2a a3a a4a a5a aba aca';
// Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра.
let str = 'a1a a2a a3a a4a a5a aba aca';
console.log(str.replace(/a\da/g, '!'));
