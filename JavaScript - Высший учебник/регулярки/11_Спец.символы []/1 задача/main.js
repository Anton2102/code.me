// Дана строка:
// let str = 'aba aea aca aza axa a.a a+a a*a';
// Напишите регулярку, которая найдет строки 'a.a', 'a+a', 'a*a', не затронув остальных.
let str = 'aba aea aca aza axa a.a a+a a*a';
console.log(str.replace(/a[.+*]a/g, '!'));
