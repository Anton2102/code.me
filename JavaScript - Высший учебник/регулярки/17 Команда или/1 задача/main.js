// Дана строка:
// let str = 'aeeea aeea aea axa axxa axxxa';
// Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'a', а между ними - или буква 'e' любое количество раз или буква 'x' любое количество раз.
let str = 'aeeea aeea aea axa axxa axxxa';
console.log(str.replace(/a(e+|x+)a/g, '!'));
