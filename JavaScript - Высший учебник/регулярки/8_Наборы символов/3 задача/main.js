// Дана строка:
// let str = 'aba aea afa aha aga';
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до g.
let str = 'aba aea afa aha aga';
console.log(str.replace(/a[a-g]a/g, '!'));
